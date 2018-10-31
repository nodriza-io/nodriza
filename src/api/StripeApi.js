'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'stripe'

export class Stripe extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * POST /v1/stripe/createCharge [PUBLIC]
  *
  * Charge stripe payment
  *
  * @param  {Object} params
  * - @param  {String} email * -> (In Body)  e.g jdoe@acme.com
  * - @param  {String} invoiceId * -> (In Body)  e.g 5b69e477733add087282f4ce
  * - @param  {String} token * -> (In Body)  e.g tok_DNL5OuNP67WTkb
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  createCharge (body, callback) {
    let params = {url: '/v1/stripe/createCharge', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/stripe/webhook [PUBLIC]
  *
  * Webhook for Stripe events
  *
  * @param  {Object} params
  * - @param   Body * -> (In body) Body params in JSON format
  * @param  {Function} callback
  * @return {Code} 200, 400, 404, 500
  */
  webhook (body, callback) {
    let params = {url: '/v1/stripe/webhook', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
