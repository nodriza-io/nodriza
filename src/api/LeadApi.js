'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'lead'

export class Lead extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * PUT /v1/lead/convert [PRIVATE]
  *
  * Convert lead to company and user
  *
  * @param  {Object} params
  * - @param  {String} leadId * -> (In Body)  e.g 5941abf8e304bac92a6b521c
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  convert (body, callback) {
    let params = {url: '/v1/lead/convert', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/lead/linkedinSearch [PRIVATE]
  *
  * Search to company in linkedin
  *
  * @param  {Object} params
  * - @param  {String} criteria  -> (In query) Criteria of search
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  linkedinSearch (params, callback) {
    let url = '/v1/lead/linkedinSearch'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
