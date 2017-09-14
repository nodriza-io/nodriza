'use strict'
import { Apparience } from './api/ApparienceApi'
import { Config } from './api/ConfigApi'
import { User } from './api/UserApi'
import { Company } from './api/CompanyApi'
import { App } from './api/AppApi'
import { AccessPolicy } from './api/AccessPolicyApi'

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
    this.api = {
      apparience: new Apparience(params),
      config: new Config(params),
      app: new App(params),
      user: new User(params),
      company: new Company(params),
      accessPolicy: new AccessPolicy(params)
    }
  }
}
