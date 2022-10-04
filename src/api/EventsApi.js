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
  * GET /v1/events/docEvents/{id}/{docId} [PRIVATE]
  *
  * Get events by doc id
  *
  * @param  {Object} params
  * - @param  {String}  * -> (In path) Register id
  * - @param  {String}  * -> (In path) Doc id
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  docEvents (callback) {
    this.get('/v1/events/docEvents/{id}/{docId}', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
