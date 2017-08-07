import _ from 'lodash'
import socketio from 'socket.io-client'
import EventEmitter from 'events'

export class Socket extends EventEmitter {
  constructor (nodriza) {
    super()
    this.nodriza = nodriza
    this.url = 'https://' + this.nodriza.hostname
    this.status = 'offline'
  }

  connect () {
    if (this.status === 'online') return console.log('--> Esta online entonces return')
    this.socketio = socketio(this.url)
    console.log('--> Socket connect init.......')
    let socketId
    this.socketio.on('connect', () => {
      this.status = 'online'
      console.log('--> connected...')
      this.socketio.on('authenticated', (_socketId) => {
        console.log('--> authenticated')
        if (socketId) this.socketio.removeAllListeners(socketId) // <-- Avoid fire multiple events
        this.socketio.removeAllListeners('everybody') // <-- Avoid fire multiple events
        socketId = _socketId
        console.log('--> authenticated, socketId: ' + socketId)
        this.socketio.on(socketId, (event) => {
          // console.log('--> socketId:' + socketId, 'new event:', event)
          let action = _.get(event, 'action')
          let data = _.get(event, 'data')
          if (_.isString(event)) action = event
          if (!_.isString(action)) throw new Error('Event has no action')
          this.emit('exec', {action, data})
        })
      })
      let session = this.nodriza.session.get()
      let accessToken = _.get(session, 'token.accessToken')
      console.log('->>> accessToken:', accessToken)
      if (accessToken) this.socketio.emit('authenticate', {accessToken: session.token.accessToken})
    })

    this.socketio.on('disconnect', () => {
      console.log('--> disconnect...')
      this.status = 'offline'
      this.emit('error', 'Disconnected')
    })

    this.socketio.on('disconnectMessage', (msg) => {
      this.emit('info', 'Disconnected:', msg)
    })
  }
}
