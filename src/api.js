'use strict'
/**
 * Load apis & models schema libraries
 */
import { Apis } from './api/index.js'
import { Schemas } from './schemas/index.js'

import { Socket } from './socket'
import { LocalStorage } from './localStorage'

export class Api extends Socket {
  constructor (params) {
    const hostname = params.hostname
    if (typeof window === 'undefined') { // <-- Check if running in node mode
      global.localStorage = new LocalStorage()
    }
    super(hostname)
    this.api = new Apis(params)
    this.schema = new Schemas(params)
  }
}
