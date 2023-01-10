'use strict'
import _ from 'lodash'
import { io } from 'socket.io-client'
import EventEmitter from 'events'

export class Socket extends EventEmitter {
  constructor (hostname) {
    super()
    this.url = 'https://' + hostname + ':3001'
    window.status = 'offline'
    this.connect = () => {
      if (window.status === 'online') return console.log('--> User already online')
      this.socketio = io(this.url)
      window.socketio = this.socketio
      // console.log('--> Socket connect init...')
      this.emit('init', this.url)
      let socketId
      this.socketio.on('connect', () => {
        window.status = 'online'
        this.emit('connect')
        this.socketio.on('authenticated', (_socketId) => {
          if (socketId) this.socketio.removeAllListeners(socketId) // <-- Avoid fire multiple events
          this.socketio.removeAllListeners('everybody') // <-- Avoid fire multiple events
          socketId = _socketId
          this.emit('authenticated', socketId)
          this.socketio.on('*', console.log)
          this.socketio.on(socketId, (event) => {
            let action = _.get(event, 'action')
            let data = _.get(event, 'data')
            if (_.isString(event)) action = event
            if (!_.isString(action)) throw new Error('Event has no action')
            this.emit('exec', {action, data})
          })
        })
        let session = this.session.get()
        let accessToken = _.get(session, 'token.accessToken')
        if (typeof accessToken === 'string') this.socketio.emit('authenticate', { accessToken })
      })
      this.socketio.on('disconnect', () => {
        window.status = 'offline'
        this.emit('disconnect')
        console.log('--> disconnect!')
      })
    }
  }
}
