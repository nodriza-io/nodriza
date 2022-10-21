'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'customApi'

export class CustomApi extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * POST /v1/customApi/register [PRIVATE]
  *
  * Set custom api methods
  *
  * @param  {Object} params
  * - @param  {String} keyname  -> (In Body) 
  * - @param  {String} type  -> (In Body) 
  * - @param  {String} content  -> (In Body) 
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  register (body, callback) {
    let params = {url: '/v1/customApi/register', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
