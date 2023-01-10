const Nodriza = require('./lib/index.js').default

const params = {
  sessionName: 'wim',
  hostname: 'dev4.nodriza.io',
  accessToken: '60f2e3ae-97fb-4a06-b2ac-5431fc491a8a'
}

const sdk = new Nodriza(params)

// Sample use Api
sdk.api.user.me(console.log)

// Sample connect socket
sdk.connect()
sdk.socketio.on('time', console.log)
sdk.socketio.onAny(console.log)
