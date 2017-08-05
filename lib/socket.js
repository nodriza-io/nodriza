import _ from 'lodash'
import socketio from 'socket.io-client'
import EventEmitter from 'events'

export class Socket extends EventEmitter {
  constructor (nodriza) {
    super()
    this.nodriza = nodriza
    this.url = 'https://' + this.nodriza.hostname
  }

  connect () {
    this.socketio = socketio(this.url)
    let socketId
    this.socketio.on('connect', () => {
      this.socketio.on('authenticated', (_socketId) => {
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
      this.socketio.emit('authenticate', {accessToken: session.token.accessToken})
    })

    this.socketio.on('disconnect', () => {
      console.log('--> disconnect...')
    })

    this.socketio.on('disconnectMessage', () => {
      console.log('--> disconnectMessage...')
    })
  }
}
