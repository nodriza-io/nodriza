'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'payu'

export class Payu extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/payu/confirm/{invoiceId} [PUBLIC]
  *
  * Redirect to a Payment receipt
  *
  * @param  {Object} params
  * - @param  {String} invoiceId * -> (In path) Invoice ID
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  confirm (params, callback) {
    this.get('/v1/payu/confirm/' + params['invoiceId'], (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/payu/signature [PUBLIC]
  *
  * Redirect to a Payment receipt
  *
  * @param  {Object} params
  * - @param  {String} merchantId * -> (In query) Merchant ID
  * - @param  {String} referenceCode * -> (In query) Reference Code, no especial charters
  * - @param  {String} amount * -> (In query) Payment Amount
  * - @param  {String} currency * -> (In query) Payment Currency
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  signature (params, callback) {
    let url = '/v1/payu/signature'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/payu/success [PUBLIC]
  *
  * Successful payment
  *
  * @param  {Object} params
  * - @param  {String} description * -> (In Body)  e.g Dashboard
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  success (body, callback) {
    let params = {url: '/v1/payu/success', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
