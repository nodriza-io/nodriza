'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'paymentReceived'

export class PaymentReceived extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * POST /v1/paymentReceived/share [PRIVATE]
  *
  * Share payment received with any email
  *
  * @param  {Object} params
  * - @param  {String} id * -> (In Body)  e.g 5a55470ce6519c07837bfa12
  * - @param  {String} email * -> (In Body)  e.g john@acme.com
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  share (body, callback) {
    let params = {url: '/v1/paymentReceived/share', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * PUT /v1/paymentReceived/starred [PRIVATE]
  *
  * Change starred status
  *
  * @param  {Object} params
  * - @param  {String} id * -> (In Body)  e.g 5a6a8feb3ac1f301fddd3950
  * - @param  {String} status * -> (In Body)  e.g true
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  starred (body, callback) {
    let params = {url: '/v1/paymentReceived/starred', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
