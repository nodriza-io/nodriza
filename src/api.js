'use strict'
import { Color } from './api/ColorApi'
import { Config } from './api/ConfigApi'
import { User } from './api/UserApi'
import { Company } from './api/CompanyApi'

import { Socket } from './socket'
import { LocalStorage } from './localStorage'

export class Api extends Socket {
  constructor (params) {
    const hostname = params.hostname
    // Check if running in node mode
    if (typeof window === 'undefined') {
      global.localStorage = new LocalStorage()
    } else {
      if (params.accessToken) throw new Error('For security resons accessToken can only be used in node mode')
    }
    super(hostname)
    this.api = {
      color: new Color(params),
      config: new Config(params),
      user: new User(params),
      company: new Company(params)
    }
  }
}
