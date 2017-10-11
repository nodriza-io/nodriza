'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'token'

export class Token extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * POST /v1/token/generateApiKey [PRIVATE]
  *
  * Generate Nodriza's API keys
  *
  * @param  {Object} params
  * - @param  {String} description * -> (In Body)  e.g Dashboard
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  generateApiKey (body, callback) {
    let params = {url: '/v1/token/generateApiKey', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
