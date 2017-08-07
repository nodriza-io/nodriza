'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'cronPreset'

export class CronPreset extends Req {
  constructor (params) {
    params.model = model
    super(params)
  }
}
