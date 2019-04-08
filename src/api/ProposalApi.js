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
  * GET /v1/proposal/calcStats [PRIVATE]
  *
  * Get proposals breaking points by stats
  *
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  calcStats (callback) {
    this.get('/v1/proposal/calcStats', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
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
  * PUT /v1/proposal/denialReason [PRIVATE]
  *
  * Set denial reason
  *
  * @param  {Object} params
  * - @param  {String} id * -> (In Body)  e.g 5a6a8feb3ac1f301fddd3950
  * - @param  {String} denialReason * -> (In Body)  e.g true
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  denialReason (body, callback) {
    let params = {url: '/v1/proposal/denialReason', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/proposal/generate [PRIVATE]
  *
  * Generate proposal
  *
  * @param  {Object} params
  * - @param  {Object} lead * -> (In Body)  e.g [object Object]
  * - @param  {Object} proposal * -> (In Body)  e.g [object Object]
  * - @param  {Array} notifyTo  -> (In Body)  e.g [object Object]
  * - @param  {Boolean} sendLeadNotification  -> (In Body)  e.g true
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  generate (body, callback) {
    let params = {url: '/v1/proposal/generate', body}
    this.post(params, (err, data) => {
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
  * GET /v1/proposal/getNextNumber [PRIVATE]
  *
  * Return next proposal number
  *
  * @param  {Function} callback
  * @return {Code} 200, 400
  */
  getNextNumber (callback) {
    this.get('/v1/proposal/getNextNumber', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/proposal/ref [PUBLIC]
  *
  * Redirect to proposal by reference number
  *
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  ref (callback) {
    this.get('/v1/proposal/ref', (err, data) => {
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
  * - @param  {String} id * -> (In Body)  e.g 5a5e5c5c321c3f05a1b7fce5
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
  * PUT /v1/proposal/setRecommendations [PRIVATE]
  *
  * Set proposal recommendations
  *
  * @param  {Object} params
  * - @param  {String} id  -> (In Body)  e.g 5ca67be618e60700b2a81d2e
  * - @param  {Array} recommendations  -> (In Body)  e.g [object Object]
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  setRecommendations (body, callback) {
    let params = {url: '/v1/proposal/setRecommendations', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/proposal/share [PRIVATE]
  *
  * Share proposal with any email
  *
  * @param  {Object} params
  * - @param  {String} id * -> (In Body)  e.g 5a55470ce6519c07837bfa12
  * - @param  {String} email * -> (In Body)  e.g john@acme.com
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
