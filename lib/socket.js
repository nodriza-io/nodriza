import _ from 'lodash'
import socketio from 'socket.io-client'

export class Socket {
  constructor (nodriza) {
    this.nodriza = nodriza
  }
  connect (url) {
    this.socketio = socketio(url)
    let socketId
    this.socketio.on('connect', () => {
      console.log('--> connect...')
      this.socketio.on('authenticated', (_socketId) => {
        if (socketId) this.socketio.removeAllListeners(socketId) // <-- Avoid fire multiple events
        this.socketio.removeAllListeners('everybody') // <-- Avoid fire multiple events
        socketId = _socketId
        console.log('--> authenticated, socketId: ' + socketId)
        // SocketId
        this.socketio.on(socketId, (event) => {
          console.log('--> socketId:' + socketId, 'new event:', event)
          let action = _.get(event, 'action')
          if (_.isString(event)) action = event
          if (!_.isString(action)) throw new Error('Event has no action')
          // if (!SocketEvents[action]) throw new Error('Action \'' + action + '\' has no method registered')
          // SocketEvents[action](_.get(event, 'data'), (err, results) => {
            // if (err) console.error(err)
            // if (results) console.log(results)
          // })
        })
      })
      let session = this.nodriza.session.get()
      console.log('->>> session:', session)
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
