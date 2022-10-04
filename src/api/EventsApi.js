'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'events'

export class Events extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/events/docEvents [PRIVATE]
  *
  * Return an array with events by doc id
  *
  * @param  {Object} params
  * - @param  {String} id * -> (In query) Register id
  * - @param  {String} docId * -> (In query) Doc id
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  docEvents (params, callback) {
    let url = '/v1/events/docEvents'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
