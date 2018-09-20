'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'product'

export class Product extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * PUT /v1/product/drop [PRIVATE]
  *
  * Drop products database
  *
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  drop (body, callback) {
    let params = {url: '/v1/product/drop', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
