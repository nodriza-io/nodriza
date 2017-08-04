'use strict'

import { Config } from './api/ConfigApi'
import { User } from './api/UserApi'
import { Company } from './api/CompanyApi'

export class Api {
  constructor (hostname) {
    let api = {
      config: new Config(hostname),
      user: new User(hostname),
      company: new Company(hostname)
    }
    return api
  }
}
