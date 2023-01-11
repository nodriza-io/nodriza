const Nodriza = require('./lib/index.js').default

const params = {
  sessionName: 'wim',
  hostname: 'staging-dev.prolibu.com',
  accessToken: 'be579978-a2df-4971-9ecb-37703cbce259'
}

const sdk = new Nodriza(params)

// Sample use Api
sdk.api.user.me(console.log)

// Sample connect socket
sdk.connect()
sdk.socketio.on('time', console.log)
sdk.socketio.onAny(console.log)
