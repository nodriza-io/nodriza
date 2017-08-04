'use strict'

import { Api } from './api'
import { LocalStorage } from './localStorage'
import { Session } from './session'

export class Nodriza {
  constructor (params) {
    this.hostname = params.hostname
    if (!this.hostname) throw new Error('Please define a hostname -> e.g acme.nodriza.io')
    this.api = new Api(this.hostname)
    this.storage = new LocalStorage(params.localStorage)
    this.session = new Session(this.storage)
  }
}
