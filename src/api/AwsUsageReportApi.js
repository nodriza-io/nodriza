'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'awsUsageReport'

export class AwsUsageReport extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * POST /v1/awsUsageReport/generateInvoice [PRIVATE]
  *
  * Generate recurrent invoices
  *
  * @param  {Object} params
  * - @param  {String} awsUsageReportId * -> (In Body)  e.g 5a57e855d3e2bc04577a53ae
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  generateInvoice (body, callback) {
    let params = {url: '/v1/awsUsageReport/generateInvoice', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
