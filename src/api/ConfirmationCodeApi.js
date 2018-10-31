'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'confirmationCode'

export class ConfirmationCode extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/confirmationCode/confirm/{code} [PUBLIC]
  *
  * Confirm confirmation code
  *
  * @param  {Object} params
  * - @param  {String} code * -> (In path) For digits confirmation code
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  confirm (params, callback) {
    this.get('/v1/confirmationCode/confirm/' + params['code'], (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
