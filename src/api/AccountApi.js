'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'account'

export class Account extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/account/getAccountInfo [PRIVATE]
  *
  * Returns Nodriza account details
  *
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  getAccountInfo (callback) {
    this.get('/v1/account/getAccountInfo', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
