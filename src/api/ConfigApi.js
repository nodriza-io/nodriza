'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'config'

export class Config extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }

  /**
  * GET /v1/config/getFactorySettings/{group} [PRIVATE]
  *
  * Returns a group of configs with factory settings
  *
  * @param  {Object} params
  * - @param  {String} group * -> (In path) Group name
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  getFactorySettings (params, callback) {
    this.get('/v1/config/getFactorySettings/' + params['group'], (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * GET /v1/config/getGroup/{group} [PRIVATE]
  *
  * Returns a group of configs by name
  *
  * @param  {Object} params
  * - @param  {String} group * -> (In path) Group name
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  getGroup (params, callback) {
    this.get('/v1/config/getGroup/' + params['group'], (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * GET /v1/config/public [PUBLIC]
  *
  * Return public configuration
  *
  * @param  {Function} callback
  * @return {Code} 200, 400
  */
  public (callback) {
    this.get('/v1/config/public', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * PUT /v1/config/updateGroup [PRIVATE]
  *
  * Update a config group
  *
  * @param  {Object} params
  * - @param  {String} group * -> (In Body)  e.g css
  * - @param  {Object} data * -> (In Body)  e.g [object Object]
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  updateGroup (body, callback) {
    let params = {url: '/v1/config/updateGroup', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
