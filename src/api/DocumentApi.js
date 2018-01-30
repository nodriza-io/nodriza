'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'document'

export class Document extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/document/{type}/{id}/{ext} [PUBLIC]
  *
  * Render templates
  *
  * @param  {Object} params
  * - @param  {String} type * -> (In path) Type of template
  * - @param  {String} id * -> (In path) Resource ID
  * - @param  {String} ext * -> (In path) Invoice extention
  * @param  {Function} callback
  * @return {Code} 200, 403, 404
  */
  view (params, callback) {
    this.get('/v1/document/{type}/{id}/' + params['ext'], (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
