'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'service'

export class Service extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/service/base64Image [PRIVATE]
  *
  * Return SVG Qr Code
  *
  * @param  {Object} params
  * - @param  {String} url  -> (In query) Url to convert to base64
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  base64Image (params, callback) {
    let url = '/v1/service/base64Image'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/service/export [PRIVATE]
  *
  * Export collection
  *
  * @param  {Object} params
  * - @param  {String} collection * -> (In query) Collection to export
  * - @param  {String} ext * -> (In query) Export format csv or json
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  export (params, callback) {
    let url = '/v1/service/export'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
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
  * GET /v1/service/getRouteControllers [PRIVATE]
  *
  * Return an array with route controllers
  *
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  getRouteControllers (callback) {
    this.get('/v1/service/getRouteControllers', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/service/iconSearch [PRIVATE]
  *
  * Return search results
  *
  * @param  {Object} params
  * - @param  {String} keyword  -> (In query) keyword
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  iconSearch (params, callback) {
    let url = '/v1/service/iconSearch'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/service/import [PRIVATE]
  *
  * Generate a document with random data for testing proposes
  *
  * @param  {Object} params
  * - @param   Body * -> (In body) Body params in JSON format
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  import (body, callback) {
    let params = {url: '/v1/service/import', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/service/pdf [PUBLIC]
  *
  * Return URL converted into PDF
  *
  * @param  {Object} params
  * - @param  {String} token  -> (In query) Access Token
  * - @param  {String} url  -> (In query) Url to capture
  * - @param  {String} delay  -> (In query) Url to capture
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  pdf (params, callback) {
    let url = '/v1/service/pdf'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/service/pdfPreview [PUBLIC]
  *
  * Return HTML converted into PDF
  *
  * @param  {Object} params
  * - @param  {String} token  -> (In query) Access Token
  * - @param  {String} html  -> (In query) Url to capture
  * - @param  {String} delay  -> (In query) Url to capture
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  pdfPreview (body, callback) {
    let params = {url: '/v1/service/pdfPreview', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/service/qr [PUBLIC]
  *
  * Return SVG Qr Code
  *
  * @param  {Object} params
  * - @param  {String} url  -> (In query) Url string
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  qr (params, callback) {
    let url = '/v1/service/qr'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/service/systemAvailability [PUBLIC]
  *
  * Validate if system is ready
  *
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  systemAvailability (callback) {
    this.get('/v1/service/systemAvailability', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
