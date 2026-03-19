module.exports = {
  apps: [
    {
      name: 'illuminix',
      script: '/home/user/webapp/start.sh',
      interpreter: 'bash',
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true
    }
  ]
}
