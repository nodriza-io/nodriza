'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'invoice'

export class Invoice extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * PUT /v1/invoice/changeStatus [PRIVATE]
  *
  * Change invoice status
  *
  * @param  {Object} params
  * - @param  {String} id * -> (In Body)  e.g 5a4d4ac4aa10f903c9d2cf2f
  * - @param  {String} status * -> (In Body)  e.g approved
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  changeStatus (body, callback) {
    let params = {url: '/v1/invoice/changeStatus', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/invoice/generateCommissionPo [PRIVATE]
  *
  * Generate commission PO from invoice
  *
  * @param  {Object} params
  * - @param  {String} invoiceId * -> (In Body)  e.g 5a5e5c5c321c3f05a1b7fce5
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  generateCommissionPo (body, callback) {
    let params = {url: '/v1/invoice/generateCommissionPo', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/invoice/getNextNumber [PRIVATE]
  *
  * Return next invoice number
  *
  * @param  {Function} callback
  * @return {Code} 200, 400
  */
  getNextNumber (callback) {
    this.get('/v1/invoice/getNextNumber', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/invoice/notifyStatus [PRIVATE]
  *
  * Send payment reminder
  *
  * @param  {Object} params
  * - @param  {String} invoiceId * -> (In Body)  e.g 5a5e5c5c321c3f05a1b7fce5
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  notifyStatus (body, callback) {
    let params = {url: '/v1/invoice/notifyStatus', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/invoice/paymentAvailability [PUBLIC]
  *
  * Returns invoice payment availability
  *
  * @param  {Object} params
  * - @param  {String} invoiceId * -> (In query) Invoice ID
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  paymentAvailability (params, callback) {
    let url = '/v1/invoice/paymentAvailability'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/invoice/recordPayment [PRIVATE]
  *
  * Generate commission PO from invoice
  *
  * @param  {Object} params
  * - @param  {String} invoiceId * -> (In Body)  e.g 5a5e5c5c321c3f05a1b7fce5
  * - @param  {Float} partial  -> (In Body)  e.g 100.2
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  recordPayment (body, callback) {
    let params = {url: '/v1/invoice/recordPayment', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/invoice/sendReminder [PRIVATE]
  *
  * Send payment reminder
  *
  * @param  {Object} params
  * - @param  {String} invoiceId * -> (In Body)  e.g 5a5e5c5c321c3f05a1b7fce5
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  sendReminder (body, callback) {
    let params = {url: '/v1/invoice/sendReminder', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/invoice/share [PRIVATE]
  *
  * Share invoice with any email
  *
  * @param  {Object} params
  * - @param  {String} id * -> (In Body)  e.g 5a55470ce6519c07837bfa12
  * - @param  {String} email * -> (In Body)  e.g john@acme.com
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  share (body, callback) {
    let params = {url: '/v1/invoice/share', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * PUT /v1/invoice/starred [PRIVATE]
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
    let params = {url: '/v1/invoice/starred', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
