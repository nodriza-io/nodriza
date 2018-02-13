'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'templateGallery'

export class TemplateGallery extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * POST /v1/templateGallery/import [PRIVATE]
  *
  * Import template
  *
  * @param  {Object} params
  * - @param  {String} keyname * -> (In Body)  e.g us-en-proposal-layout
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  import (body, callback) {
    let params = {url: '/v1/templateGallery/import', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/templateGallery/view/{keyname}/{ext} [PUBLIC]
  *
  * Render templates
  *
  * @param  {Object} params
  * - @param  {String} keyname * -> (In path) Resource ID
  * - @param  {String} ext * -> (In path) Template extention
  * @param  {Function} callback
  * @return {Code} 200, 403, 404
  */
  view (params, callback) {
    this.get('/v1/templateGallery/view/{keyname}/' + params['ext'], (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
