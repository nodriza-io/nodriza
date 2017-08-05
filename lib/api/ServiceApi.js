'use strict'
/* eslint-disable no-unused-vars */
import { Req } from '../req'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'service'

export class Service extends Req {
  constructor (params) {
    params.model = model
    super(params)
  }

  /**
  * POST /v1/service/genRandomDoc [PRIVATE]
  *
  * Generate a document with random data for testing proposes
  *
  * @param  {Object} params
  * - @param  {String} collection * -> (In Body)  e.g company
  * - @param  {String} overwrite  -> (In Body)  e.g [object Object]
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  genRandomDoc (body, callback) {
    let params = {url: '/v1/service/genRandomDoc', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * GET /v1/service/generateAvatar [PRIVATE]
  *
  * Return an array with route controllers
  *
  * @param  {Object} params
  * - @param  {String} width  -> (In query) Avatar size, eg. 200
  * - @param  {String} color  -> (In query) Avatar color, if not set will take randomly one of host company color e.g FF0000 (Do not add #)
  * - @param  {String} text * -> (In query) Avatar initials text, send full name if needed e.g Jhon Doe
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  generateAvatar (params, callback) {
    let url = '/v1/service/generateAvatar'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * GET /v1/service/generateColors [PRIVATE]
  *
  * Return an array of color taken from an online image
  *
  * @param  {Object} params
  * - @param  {String} url  -> (In query) url of image to extract colors
  * - @param  {String} colorsNumber  -> (In query) The number of colors to generate
  * - @param  {String} sortBy  -> (In query) Sort colors by...
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  generateColors (params, callback) {
    let url = '/v1/service/generateColors'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
