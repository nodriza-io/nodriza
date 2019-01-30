'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'roleLibrary'

export class RoleLibrary extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/role-library/getPermissions/{roleKeyname} [PRIVATE]
  *
  * Return an array with role permissions
  *
  * @param  {Object} params
  * - @param  {String} roleKeyname * -> (In path) e.g support
  * @param  {Function} callback
  * @return {Code} 200, 400
  */
  getPermissions (params, callback) {
    this.get('/v1/role-library/getPermissions/' + params['roleKeyname'], (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
