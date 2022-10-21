'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'urlShort'

export class UrlShort extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * POST /v1/urlShort/generate [PRIVATE]
  *
  * Generate a new short URL
  *
  * @param  {Object} params
  * - @param  {String} url * -> (In Body)  e.g http://www.acme.com/
  * @param  {Function} callback
  * @return {Code} 200, 401
  */
  generate (body, callback) {
    let params = {url: '/v1/urlShort/generate', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
