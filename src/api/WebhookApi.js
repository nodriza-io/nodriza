'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'webhook'

export class Webhook extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/webhook/getDomainEvents/ [PRIVATE]
  *
  * Return an array with webhook events
  *
  * @param  {Function} callback
  * @return {Code} 200, 400
  */
  getDomainEvents (callback) {
    this.get('/v1/webhook/getDomainEvents/', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
