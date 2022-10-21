'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'recurringInvoice'

export class RecurringInvoice extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * POST /v1/recurringInvoice/generateInvoice [PRIVATE]
  *
  * Generate Invoice from recurring invoice
  *
  * @param  {Object} params
  * - @param  {String} quoteId  -> (In Body)  e.g 5a5e5c5c321c3f05a1b7fce5
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  generateInvoice (body, callback) {
    let params = {url: '/v1/recurringInvoice/generateInvoice', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
