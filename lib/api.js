'use strict'
import { Config } from './api/ConfigApi'
import { User } from './api/UserApi'
import { Company } from './api/CompanyApi'

export class Api {
  constructor (params) {
    this.api = {
      config: new Config(params),
      user: new User({hostname: params.hostname}),
      company: new Company(params)
    }
  }
}
