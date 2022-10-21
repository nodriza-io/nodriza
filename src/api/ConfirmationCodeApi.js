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
  * GET /v1/confirmationCode/ [PUBLIC]
  *
  * Get code confirmation code
  *
  * @param  {Object} params
  * - @param  {Integer} size  -> (In query) For digits confirmation code
  * - @param  {String} charPreset  -> (In query) For digits confirmation code
  * - @param  {Integer} noise  -> (In query) For digits confirmation code
  * - @param  {Boolean} color  -> (In query) For digits confirmation code
  * - @param  {String} background  -> (In query) For digits confirmation code
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  getCode (params, callback) {
    let url = '/v1/confirmationCode/'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
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
