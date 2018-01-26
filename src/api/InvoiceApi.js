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
}
