'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'spreadSheet'

export class SpreadSheet extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/spreadSheet/exists/{keyname} [PRIVATE]
  *
  * Return if a spreadSheet exists
  *
  * @param  {Object} params
  * - @param  {String} keyname  -> (In query) keyname spreadSheet
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  exists (params, callback) {
    let url = '/v1/spreadSheet/exists/{keyname}'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/spreadSheet/workbook/{keyname} [PRIVATE]
  *
  * Return spreadSheet scripts
  *
  * @param  {Object} params
  * - @param  {String} keyname  -> (In query) keyname spreadSheet
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  workbook (params, callback) {
    let url = '/v1/spreadSheet/workbook/{keyname}'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
