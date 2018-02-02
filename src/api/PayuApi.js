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
  * GET /v1/payu/checkout [PUBLIC]
  *
  * PayU payment checkout
  *
  * @param  {Object} params
  * - @param  {String} invoiceId * -> (In query) e.g 5a6cf3b33e8f4600fd6cf211
  * - @param  {String} buyerFullName  -> (In query) e.g Jonh Doe
  * - @param  {String} buyerEmail  -> (In query) e.g jdoe@acme.com
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  checkout (params, callback) {
    let url = '/v1/payu/checkout'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/payu/confirm [PUBLIC]
  *
  * Successful payment
  *
  * @param  {Object} params
  * - @param  {String} description  -> (In Body)  e.g jdoe@acme.com
  * - @param  {String} email_buyer  -> (In Body)  e.g jdoe@acme.com
  * - @param  {String} transaction_id * -> (In Body)  e.g 4a5320dc-15ba-43c0-b204-73b67caae120
  * - @param  {String} payment_method_name  -> (In Body)  e.g VISA
  * - @param  {String} commision_pol  -> (In Body)  e.g 13530.30
  * - @param  {String} extra1  -> (In Body)  e.g 5a723600947678012c2de6b3
  * - @param  {String} extra2  -> (In Body)  e.g 5a723600947678012c2de6b3
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  confirm (body, callback) {
    let params = {url: '/v1/payu/confirm', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/payu/response/{invoiceId} [PUBLIC]
  *
  * Redirect to a Payment receipt
  *
  * @param  {Object} params
  * - @param  {String} invoiceId * -> (In path) Invoice ID
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  response (params, callback) {
    this.get('/v1/payu/response/' + params['invoiceId'], (err, data) => {
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
}
