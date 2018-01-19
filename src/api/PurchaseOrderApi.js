'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'purchaseOrder'

export class PurchaseOrder extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * PUT /v1/purchaseOrder/changeStatus [PRIVATE]
  *
  * Change purchase order status
  *
  * @param  {Object} params
  * - @param  {String} id * -> (In Body)  e.g 5a62291a0f7203033711cdb0
  * - @param  {String} status * -> (In Body)  e.g approved
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  changeStatus (body, callback) {
    let params = {url: '/v1/purchaseOrder/changeStatus', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
