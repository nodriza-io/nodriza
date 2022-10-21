'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'reservation'

export class Reservation extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/reservation/getDates [PRIVATE]
  *
  * Return an object with reservation dates
  *
  * @param  {Object} params
  * - @param  {String} calendar  -> (In query) Calendar model reference
  * - @param  {String} endDate  -> (In query) Date range end
  * - @param  {String} startDate  -> (In query) Date range start
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  getDates (params, callback) {
    let url = '/v1/reservation/getDates'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
