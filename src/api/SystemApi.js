'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'system'

export class System extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * PUT /v1/system/changeTimeZone [PRIVATE]
  *
  * Change platform time zone
  *
  * @param  {Object} params
  * - @param  {String} value * -> (In Body)  e.g SA Pacific Standard Time
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  changeTimeZone (body, callback) {
    let params = {url: '/v1/system/changeTimeZone', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * PUT /v1/system/setDefaultCurrency [PRIVATE]
  *
  * Change platform default currency
  *
  * @param  {Object} params
  * - @param  {String} code * -> (In Body)  e.g USD
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  setDefaultCurrency (body, callback) {
    let params = {url: '/v1/system/setDefaultCurrency', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
