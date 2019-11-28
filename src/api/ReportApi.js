'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'report'

export class Report extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/report/download [PRIVATE]
  *
  * Download report results
  *
  * @param  {Object} params
  * - @param  {String} match  -> (In query) Filter results
  * - @param  {String} range  -> (In query) Set report range
  * - @param  {String} startDate  -> (In query) Report start date
  * - @param  {String} endDate  -> (In query) Report end date
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  download (params, callback) {
    let url = '/v1/report/download'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/report/ranges [PRIVATE]
  *
  * Return available ranges for reports
  *
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  ranges (callback) {
    this.get('/v1/report/ranges', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/report/run [PRIVATE]
  *
  * Return report results
  *
  * @param  {Object} params
  * - @param  {String} match  -> (In query) Filter results
  * - @param  {String} range  -> (In query) Set report range
  * - @param  {String} startDate  -> (In query) Report start date
  * - @param  {String} endDate  -> (In query) Report end date
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  run (params, callback) {
    let url = '/v1/report/run'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
