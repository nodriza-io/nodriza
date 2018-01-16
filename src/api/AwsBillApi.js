'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'awsBill'

export class AwsBill extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/awsBill/availability [PRIVATE]
  *
  * Validate if billing reports are enabled successfully
  *
  * @param  {Object} params
  * - @param  {String} awsAccountNumber * -> (In query) AWS Account Number e.g 433535721479
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  availability (params, callback) {
    let url = '/v1/awsBill/availability'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * PUT /v1/awsBill/collect [PRIVATE]
  *
  * Collect billing report
  *
  * @param  {Object} params
  * - @param  {String} awsAccountNumber * -> (In Body)  e.g 433535721478
  * - @param  {String} period * -> (In Body)  e.g currentMonth
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  collect (body, callback) {
    let params = {url: '/v1/awsBill/collect', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/awsBill/getReportByField [PRIVATE]
  *
  * Get bill report by field
  *
  * @param  {Object} params
  * - @param  {String} field * -> (In query) Report field
  * - @param  {String} timeRange * -> (In query) Time range
  * - @param  {String} query * -> (In query) Filter results
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  getReportByField (params, callback) {
    let url = '/v1/awsBill/getReportByField'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/awsBill/getReportByGranularity [PRIVATE]
  *
  * Get bill report by granularity
  *
  * @param  {Object} params
  * - @param  {String} granularity * -> (In query) Granularity level
  * - @param  {String} timeRange * -> (In query) Time range
  * - @param  {String} query * -> (In query) Filter results
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  getReportByGranularity (params, callback) {
    let url = '/v1/awsBill/getReportByGranularity'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
