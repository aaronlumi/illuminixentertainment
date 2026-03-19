#!/bin/bash
# Start the range-aware video server on port 3001
node /home/user/webapp/video-server.mjs &
VIDEO_PID=$!

# Start wrangler pages dev on port 3000
npx wrangler pages dev dist --ip 0.0.0.0 --port 3000

# When wrangler exits, kill the video server
kill $VIDEO_PID 2>/dev/null
