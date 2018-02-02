'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'email'

export class Email extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/email/html/{uuid} [PUBLIC]
  *
  * View email in browser
  *
  * @param  {Object} params
  * - @param  {String} uuid * -> (In path) e.g 56a69869-bf0a-4650-98e9-fcd9680b31d5
  * @param  {Function} callback
  * @return {Code} 200, 400
  */
  html (params, callback) {
    this.get('/v1/email/html/' + params['uuid'], (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/email/images/{uuid} [PUBLIC]
  *
  * Track email views uuid should come with .gif extention
  *
  * @param  {Object} params
  * - @param  {String} uuid * -> (In path) e.g 56a69869-bf0a-4650-98e9-fcd9680b31d5.gif
  * @param  {Function} callback
  * @return {Code} 200, 400
  */
  webBacon (params, callback) {
    this.get('/v1/email/images/' + params['uuid'], (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
