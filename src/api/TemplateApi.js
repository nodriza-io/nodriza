'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'template'

export class Template extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/template/view [PUBLIC]
  *
  * Calculate live currency and foreign exchange rates
  *
  * @param  {Object} params
  * - @param  {String} type  -> (In query) Invoice ID
  * - @param  {String} keyname  -> (In query) Invoice unique keyname
  * - @param  {String} id  -> (In query) Resource ID
  * - @param  {String} format  -> (In query) PDF canvas size
  * - @param  {String} ext  -> (In query) Desired extension, pdf or html format
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  view (params, callback) {
    let url = '/v1/template/view'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
