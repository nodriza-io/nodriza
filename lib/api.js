'use strict'
import { Config } from './api/ConfigApi'
import { User } from './api/UserApi'
import { Company } from './api/CompanyApi'

import { Socket } from './socket'
import localStorage from '../lib/localStorage'

export class Api extends Socket {
  constructor (params) {
    const hostname = params.hostname
    // Check if running in node mode
    if (typeof window === 'undefined') {
    	global.localStorage = localStorage
    } else {
    	if (params.accessToken) throw new Error('For security resons accessToken can only be used in node mode')
    }
    super(hostname)
    this.api = {
      config: new Config(params),
      user: new User(params),
      company: new Company(params)
    }
  }
}
