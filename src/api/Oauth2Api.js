'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'oauth2'

export class Oauth2 extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/oauth2/token [PUBLIC]
  *
  * Generate OAuth2 Access Token
  *
  * @param  {Object} params
  * - @param  {String} client_id * -> (In Body) 
  * - @param  {String} client_secret * -> (In Body) 
  * - @param  {String} grant_type * -> (In Body) 
  * - @param  {String} username * -> (In Body) 
  * - @param  {String} password * -> (In Body) 
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  token (body, callback) {
    let params = {url: '/v1/oauth2/token', body}
    this.get(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/oauth2/token [PUBLIC]
  *
  * Generate OAuth2 Access Token
  *
  * @param  {Object} params
  * - @param  {String} client_id * -> (In Body) 
  * - @param  {String} client_secret * -> (In Body) 
  * - @param  {String} grant_type * -> (In Body) 
  * - @param  {String} username * -> (In Body) 
  * - @param  {String} password * -> (In Body) 
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  token (body, callback) {
    let params = {url: '/v1/oauth2/token', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
