'use strict'

import { Config } from './api/ConfigApi'
import { User } from './api/UserApi'

export class Api {
  constructor (hostname) {
    let api = {
      config: new Config(hostname),
      user: new User(hostname)
    }
    return api
  }
}
