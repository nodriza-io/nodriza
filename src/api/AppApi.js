'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'app'

export class App extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * PUT /v1/app/activate [PRIVATE]
  *
  * Set app active or inactive
  *
  * @param  {Object} params
  * - @param  {String} appId * -> (In Body)  e.g 594d4b5970abb08100bf5b71
  * - @param  {String} clientId  -> (In Body)  e.g 467332518934-hf4q0d8q8qb5hvcs3f4d4hfpetrbpi9s.apps.Googleusercontent.com
  * - @param  {String} clientSecret  -> (In Body)  e.g AqbCusgZgrMQspMQS3FWl7ue
  * - @param  {String} active * -> (In Body)  e.g true
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  activate (body, callback) {
    let params = {url: '/v1/app/activate', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/app/list [PRIVATE]
  *
  * Get platform apps
  *
  * @param  {Function} callback
  * @return {Code} 200, 401
  */
  list (callback) {
    this.get('/v1/app/list', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
