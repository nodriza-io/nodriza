'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'eventsFilter'

export class EventsFilter extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * PUT /v1/eventsFilter/saveFilters [PRIVATE]
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
    let params = {url: '/v1/eventsFilter/saveFilters', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
