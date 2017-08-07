'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'role'

export class Role extends Req {
  constructor (params) {
    params.model = model
    super(params)
  }

  /**
  * PUT /v1/role/addPermissions [PRIVATE]
  *
  * Add one or more role permissions
  *
  * @param  {Object} params
  * - @param  {String} roleKeyname * -> (In Body)  e.g support
  * - @param  {Array} permissionKeynames * -> (In Body)  e.g region,department_create,department_update_name
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  addPermissions (body, callback) {
    let params = {url: '/v1/role/addPermissions', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * GET /v1/role/getPermissions/{roleKeyname} [PRIVATE]
  *
  * Return an array with role permissions
  *
  * @param  {Object} params
  * - @param  {String} roleKeyname * -> (In path) e.g support
  * @param  {Function} callback
  * @return {Code} 200, 400
  */
  getPermissions (params, callback) {
    this.get('/v1/role/getPermissions/' + params['roleKeyname'], (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * DELETE /v1/role/removeAllPermissions [PRIVATE]
  *
  * Remove all assigned role permissions
  *
  * @param  {Object} params
  * - @param  {String} roleKeyname * -> (In Body)  e.g client
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  removeAllPermissions (body, callback) {
    let params = {url: '/v1/role/removeAllPermissions', body}
    this.delete(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * DELETE /v1/role/removePermissions [PRIVATE]
  *
  * Remove one or more role permissions
  *
  * @param  {Object} params
  * - @param  {String} roleKeyname * -> (In Body)  e.g support
  * - @param  {Array} permissionKeynames * -> (In Body)  e.g region,department_create,department_update_name
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  removePermissions (body, callback) {
    let params = {url: '/v1/role/removePermissions', body}
    this.delete(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
