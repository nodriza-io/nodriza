'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'awsInstance'

export class AwsInstance extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/awsInstance/calculateRiPricing [PRIVATE]
  *
  * Return reserved instance pricings
  *
  * @param  {Object} params
  * - @param  {String} instanceId  -> (In query) instanceId e.g i-0ee2de611e06b2992
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  calculateRiPricing (params, callback) {
    let url = '/v1/awsInstance/calculateRiPricing'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
