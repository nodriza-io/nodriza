'use strict'
/* eslint-disable no-unused-vars */
import { Req } from '../req'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'country'

export class Country extends Req {
  constructor (hostname) {
    super({hostname, model})
  }
}
