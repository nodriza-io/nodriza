'use strict'

import { Api } from './api'
import { Storage } from './storage'
import { Session } from './session'
// import { Socket } from './socket'

export class Nodriza {
  constructor (params) {
    if (!params || !params.hostname) throw new Error('Please define a hostname -> e.g acme.nodriza.io')
    this.hostname = params.hostname
    this.api = new Api(this.hostname)
    this.storage = new Storage(params.localStorage)
    this.session = new Session(this.storage)
  }
}
