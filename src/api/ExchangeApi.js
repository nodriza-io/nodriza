'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'exchange'

export class Exchange extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/exchange/convert [PRIVATE]
  *
  * Calculate live currency and foreign exchange rates
  *
  * @param  {Object} params
  * - @param  {String} currency  -> (In query) Currency code, eg. COP
  * - @param  {String} amount  -> (In query) Amount to convert , eg. 10
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  convert (params, callback) {
    let url = '/v1/exchange/convert'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/exchange/getRates [PUBLIC]
  *
  * Get latest exchange rates
  *
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  getRates (callback) {
    this.get('/v1/exchange/getRates', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
