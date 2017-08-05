'use strict'

import { Api } from './api'
import { Storage } from './storage'
import { Session } from './session'
import { Socket } from './socket'

export class Nodriza {
  constructor (params) {
    if (!params || !params.hostname) throw new Error('Please define a hostname -> e.g acme.nodriza.io')
    for (let prop in params) this[prop] = params[prop]
    this.storage = new Storage(params.localStorage)
    this.session = new Session(this.storage)
    this.socket = new Socket(this)
    this.api = new Api(this)
  }
}
