'use strict'
/* eslint-disable no-unused-vars */
import { Req } from '../req'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'cron'

export class Cron extends Req {
  constructor (hostname) {
    super({hostname, model})
  }
}
