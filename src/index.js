'use strict'

import moment from 'moment'
import lStorage from 'localStorage'

import { Api } from './api'
import { Session } from './session'
import { Storage } from './storage'
import { Utils } from './utils'

global.moment = moment

if (typeof window === 'undefined') {
  if (global.window === undefined) global.window = {}
  global.window['localStorage'] = lStorage
}

export default class Nodriza extends Api {
  constructor (params) {
    super(params)
    if (!params || !params.hostname) throw new Error('Please define hostname -> e.g acme.nodriza.io')
    this.sessionName = params.sessionName
    this.hostname = params.hostname
    if (typeof this.sessionName === 'string') {
      this.session = new Session({ name: this.sessionName })
    } else {
      this.session = new Session()
    }
    this.storage = new Storage()
    this.u = new Utils()

    const language = window.localStorage.getItem('lang')
    if (language) moment.locale(language.replace(/"/g, ''))
  }
}
