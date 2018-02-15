'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'proposal'

export class Proposal extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * PUT /v1/proposal/changeStatus [PRIVATE]
  *
  * Change proposal status
  *
  * @param  {Object} params
  * - @param  {String} id * -> (In Body)  e.g 5a55470ce6519c07837bfa12
  * - @param  {String} status * -> (In Body)  e.g Accepted
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  changeStatus (body, callback) {
    let params = {url: '/v1/proposal/changeStatus', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/proposal/generateInvoice [PRIVATE]
  *
  * Generate Invoice from proposal
  *
  * @param  {Object} params
  * - @param  {String} proposalId * -> (In Body)  e.g 5a5e5c5c321c3f05a1b7fce5
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  generateInvoice (body, callback) {
    let params = {url: '/v1/proposal/generateInvoice', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/proposal/send [PRIVATE]
  *
  * Send proposal to client or lead
  *
  * @param  {Object} params
  * - @param  {String} proposalId * -> (In Body)  e.g 5a5e5c5c321c3f05a1b7fce5
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  send (body, callback) {
    let params = {url: '/v1/proposal/send', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/proposal/share [PRIVATE]
  *
  * Send proposal to anybody else
  *
  * @param  {Object} params
  * - @param  {String} id * -> (In Body)  e.g 5a5e5c5c321c3f05a1b7fce5
  * - @param  {String} email * -> (In Body)  e.g jdoen@acmeinc.com
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  share (body, callback) {
    let params = {url: '/v1/proposal/share', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * PUT /v1/proposal/starred [PRIVATE]
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
    let params = {url: '/v1/proposal/starred', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
