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
    super(params.hostname)
    this.api = new Apis(params)
    this.schema = new Schemas(params)
  }
}
