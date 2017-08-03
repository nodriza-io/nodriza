'use strict'

import { Api } from './api'

export class Nodriza {
  constructor (params) {
    this.hostname = params.hostname
    this.storage = params.storage
    if (!this.hostname) throw new Error('Please define a hostname')
    if (!this.storage) throw new Error('Please define storage type')
    this.api = new Api(this.hostname)
  }
}
