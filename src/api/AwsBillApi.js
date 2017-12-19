'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'awsBill'

export class AwsBill extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/awsBill/availability [PRIVATE]
  *
  * Validate if billing reports are enabled successfully
  *
  * @param  {Object} params
  * - @param  {String} awsAccountNumber * -> (In query) AWS Account Number e.g 433535721479
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  availability (params, callback) {
    let url = '/v1/awsBill/availability'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
