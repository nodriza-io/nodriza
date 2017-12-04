'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'plan'

export class Plan extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/plan/getMetric [PRIVATE]
  *
  * Return plan metrics
  *
  * @param  {Object} params
  * - @param  {String} plan * -> (In query) Plan ID
  * - @param  {String} timeRange * -> (In query) Metric report time range e.g 1h, 1d, 1m
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  getMetric (params, callback) {
    let url = '/v1/plan/getMetric'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
