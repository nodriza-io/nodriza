'use strict'

import { Apis } from './apis'

export class Nodriza {
  constructor () {
    for (let api in Apis) {
      this[api] = Apis[api]
    }
  }
}
