'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'account'

export class Account extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * POST /v1/account/checkWS [PRIVATE]
  *
  * Check WS
  *
  * @param  {Object} params
  * - @param  {String} userId * -> (In Body)  e.g 5a55470ce6519c07837bfa12
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  checkWS (body, callback) {
    let params = {url: '/v1/account/checkWS', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/account/getAccountInfo [PRIVATE]
  *
  * Returns Nodriza account details
  *
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  getAccountInfo (callback) {
    this.get('/v1/account/getAccountInfo', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/account/latePayment [PRIVATE]
  *
  * Returns Nodriza account payment status
  *
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  latePayment (callback) {
    this.get('/v1/account/latePayment', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/account/nonCollaborativeMode [PUBLIC]
  *
  * Returns Nodriza account non collaborative mode
  *
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  nonCollaborativeMode (callback) {
    this.get('/v1/account/nonCollaborativeMode', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
