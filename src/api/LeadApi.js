'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'lead'

export class Lead extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * PUT /v1/lead/changeStatus [PRIVATE]
  *
  * Change lead status
  *
  * @param  {Object} params
  * - @param  {String} id * -> (In Body)  e.g 5a55470ce6519c07837bfa12
  * - @param  {String} status * -> (In Body)  e.g Converted
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  changeStatus (body, callback) {
    let params = {url: '/v1/lead/changeStatus', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * PUT /v1/lead/starred [PRIVATE]
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
    let params = {url: '/v1/lead/starred', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
