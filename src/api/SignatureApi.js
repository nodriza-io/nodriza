'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'signature'

export class Signature extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/signature/board/{type}/{signatureId} [PUBLIC]
  *
  * Render templates
  *
  * @param  {Object} params
  * - @param  {String} type * -> (In path) Type of template
  * - @param  {String} signatureId * -> (In path) Resource ID
  * @param  {Function} callback
  * @return {Code} 200, 403, 404
  */
  board (params, callback) {
    this.get('/v1/signature/board/{type}/' + params['signatureId'], (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/signature/register [PUBLIC]
  *
  * Register signature
  *
  * @param  {Object} params
  * - @param  {String} type * -> (In Body)  e.g invoice
  * - @param  {String} signatureId * -> (In Body)  e.g 5a46ba1a7193d10146badcc0
  * - @param  {String} fullName * -> (In Body)  e.g John Doe
  * - @param  {String} title  -> (In Body)  e.g Receptionist
  * - @param  {String} identificationNumber  -> (In Body)  e.g 80103086
  * - @param  {String} currentVersion  -> (In Body)  e.g 5f5009a29d5ebd05ef9b0c6f
  * - @param  {String} eSignature * -> (In Body)  e.g data:image/png;base64,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
  * @param  {Function} callback
  * @return {Code} 200, 400, 404, 500
  */
  register (body, callback) {
    let params = {url: '/v1/signature/register', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/signature/sendEmailValidation [PRIVATE]
  *
  * Send email signature validation
  *
  * @param  {Object} params
  * - @param  {String} docType * -> (In Body)  e.g proposal
  * - @param  {String} docId * -> (In Body)  e.g 5a46ba1a7193d10146badcc0
  * - @param  {String} email * -> (In Body)  e.g example@email.com
  * @param  {Function} callback
  * @return {Code} 200, 400, 404, 500
  */
  sendEmailValidation (body, callback) {
    let params = {url: '/v1/signature/sendEmailValidation', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/signature/verifyEmail [PUBLIC]
  *
  * Signature validation
  *
  * @param  {Object} params
  * - @param  {String} hash * -> (In Body)  e.g 78531b5c97b53e5029b5c03f9e520d5d15d1db61
  * @param  {Function} callback
  * @return {Code} 200, 400, 404, 500
  */
  verifyEmail (body, callback) {
    let params = {url: '/v1/signature/verifyEmail', body}
    this.get(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
