module.exports = {
  apps: [
    {
      name: 'illuminix',
      script: 'npx',
      args: 'wrangler pages dev dist --ip 0.0.0.0 --port 3000',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    },
    {
      name: 'illuminix-video',
      script: '/home/user/webapp/video-server.mjs',
      interpreter: 'node',
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}
