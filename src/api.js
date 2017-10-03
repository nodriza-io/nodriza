'use strict'
/**
 * Load apis & models schema libraries
 */
import { Apis } from './api/'
import { Schemas } from './schemas/'

import { Socket } from './socket'
import { LocalStorage } from './localStorage'

export class Api extends Socket {
  constructor (params) {
    const hostname = params.hostname
    if (typeof window === 'undefined') { // <-- Check if running in node mode
      global.localStorage = new LocalStorage()
    } else {
      if (params.accessToken) throw new Error('For security resons accessToken can only be used in node mode')
    }
    super(hostname)
    this.api = new Apis(params)
    this.schema = new Schemas(params)
  }
}
