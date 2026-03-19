import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VIDEO_PATH = path.join(__dirname, 'public/static/intro.mp4');
const PORT = 3001;

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Range');
  res.setHeader('Access-Control-Expose-Headers', 'Content-Range, Accept-Ranges, Content-Length');

  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }
  if (req.url !== '/intro.mp4') { res.writeHead(404); res.end('Not found'); return; }

  let stat;
  try { stat = fs.statSync(VIDEO_PATH); }
  catch { res.writeHead(404); res.end('Video not found'); return; }

  const total = stat.size;
  const range = req.headers['range'];

  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end   = parts[1] ? parseInt(parts[1], 10) : Math.min(start + 1048576, total - 1);
    const chunkSize = (end - start) + 1;
    const stream = fs.createReadStream(VIDEO_PATH, { start, end });
    res.writeHead(206, {
      'Content-Range':  `bytes ${start}-${end}/${total}`,
      'Accept-Ranges':  'bytes',
      'Content-Length': chunkSize,
      'Content-Type':   'video/mp4',
    });
    stream.pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Length': total,
      'Content-Type':   'video/mp4',
      'Accept-Ranges':  'bytes',
    });
    fs.createReadStream(VIDEO_PATH).pipe(res);
  }
});

// Handle port-in-use gracefully
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} in use, retrying in 2s...`);
    setTimeout(() => {
      server.close();
      server.listen(PORT, '0.0.0.0');
    }, 2000);
  } else {
    console.error(err);
    process.exit(1);
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[illuminix-video] Video server ready on port ${PORT}`);
});
