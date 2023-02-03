'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'eventFilter'

export class EventFilter extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/eventFilter/exists [PRIVATE]
  *
  * Return if user have active RAF filters
  *
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  exists (callback) {
    this.get('/v1/eventFilter/exists', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * PUT /v1/eventFilter/saveFilters [PRIVATE]
  *
  * Save Filters
  *
  * @param  {Object} params
  * - @param  {String} user * -> (In Body)  e.g 5a6a8feb3ac1f301fddd3950
  * - @param  {Json} filter * -> (In Body)  e.g true
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  saveFilters (body, callback) {
    let params = {url: '/v1/eventFilter/saveFilters', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
