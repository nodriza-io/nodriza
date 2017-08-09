'use strict'
import { Config } from './api/ConfigApi'
import { User } from './api/UserApi'
import { Company } from './api/CompanyApi'

import { Socket } from './socket'

export class Api extends Socket {
  constructor (params) {
    const hostname = params.hostname
    super(hostname)
    this.api = {
      config: new Config({hostname}),
      user: new User({hostname}),
      company: new Company({hostname})
    }
  }
}
