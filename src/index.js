'use strict'

import { Api } from './api'
import { Session } from './session'
import { Storage } from './storage'
import { Utils } from './utils'

export default class Nodriza extends Api {
  constructor (params) {
    super(params)
    if (!params || !params.hostname) throw new Error('Please define hostname -> e.g acme.nodriza.io')
    this.sessionName = params.sessionName
    this.hostname = params.hostname
    if (this.sessionName) {
      this.session = new Session({ sessionName: this.sessionName })
    } else {
      this.session = new Session()
    }
    this.storage = new Storage()
    this.u = new Utils()
  }
}
