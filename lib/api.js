'use strict'

import { Config } from './api/ConfigApi'
import { User } from './api/UserApi'
import { Company } from './api/CompanyApi'

export class Api {
  constructor (params) {
    let api = {
      config: new Config(params),
      user: new User(params),
      company: new Company(params)
    }
    return api
  }
}
