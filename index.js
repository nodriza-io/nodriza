'use strict'

import { Api } from './api'
import { LocalStorage } from './storage/localStorage'

export class Nodriza {
  constructor (params) {
    this.hostname = params.hostname
    if (!this.hostname) throw new Error('Please define a hostname -> e.g acme.nodriza.io')
    this.api = new Api(this.hostname)
    this.storage = new LocalStorage()
  }
  /**
   * Session setter and getter
   * 
   * @param  {String} key
   * @param  {String} value
   * @return {Object}
   */
  session (session) {
    if (session) {
      this.storage.save('session', session)
    } else {
      session = this.storage.load('session')
    }
    return session
  }
}
