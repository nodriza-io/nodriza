'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'user'

export class User extends Req {
  constructor (params) {
    params.model = model
    super(params)
  }

  /**
  * PUT /v1/user/addAllRoles [PRIVATE]
  *
  * Add all available roles to user
  *
  * @param  {Object} params
  * - @param  {String} userId * -> (In Body)  e.g 5941abf8e304bac92a6b521c
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  addAllRoles (body, callback) {
    let params = {url: '/v1/user/addAllRoles', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * PUT /v1/user/addPermissions [PRIVATE]
  *
  * Add one or more user permissions
  *
  * @param  {Object} params
  * - @param  {String} userId * -> (In Body)  e.g 5941abf8e304bac92a6b521c
  * - @param  {Array} permissionKeynames * -> (In Body)  e.g region,user_find,department_create_name
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  addPermissions (body, callback) {
    let params = {url: '/v1/user/addPermissions', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * PUT /v1/user/addRoles [PRIVATE]
  *
  * Add one or more user roles
  *
  * @param  {Object} params
  * - @param  {String} userId * -> (In Body)  e.g 5941abf8e304bac92a6b521c
  * - @param  {Array} roleKeynames * -> (In Body)  e.g sales,support
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  addRoles (body, callback) {
    let params = {url: '/v1/user/addRoles', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * GET /v1/user/getPermissions/{userId} [PRIVATE]
  *
  * Return an array with user permissions
  *
  * @param  {Object} params
  * - @param  {String} userId * -> (In path) User Id -> e.g: 5941abf8e304bac92a6b521c
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  getPermissions (params, callback) {
    this.get('/v1/user/getPermissions/' + params['userId'], (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * GET /v1/user/getRoles/{userId} [PRIVATE]
  *
  * Return an array with user roles
  *
  * @param  {Object} params
  * - @param  {String} userId * -> (In path) User Id -> e.g: 5941abf8e304bac92a6b521c
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  getRoles (params, callback) {
    this.get('/v1/user/getRoles/' + params['userId'], (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * POST /v1/user/login [PUBLIC]
  *
  * User login
  *
  * @param  {Object} params
  * - @param  {String} username * -> (In Body)  e.g jprieto@nodriza.io
  * - @param  {String} password * -> (In Body)  e.g Shox009_
  * - @param  {String} accessToken  -> (In Body)  e.g 56a69869-bf0a-4650-98e9-fcd9680b31d5
  * @param  {Function} callback
  * @return {Code} 200, 401
  */
  login (body, callback) {
    let params = {url: '/v1/user/login', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * DELETE /v1/user/logout [PUBLIC]
  *
  * User session logout
  *
  * @param  {Function} callback
  * @return {Code} 200, 401
  */
  logout (callback) {
    this.delete('/v1/user/logout', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * DELETE /v1/user/logoutAllDevices [PRIVATE]
  *
  * Logout all other logged devices
  *
  * @param  {Function} callback
  * @return {Code} 200, 401
  */
  logoutAllDevices (callback) {
    this.delete('/v1/user/logoutAllDevices', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * GET /v1/user/me [PRIVATE]
  *
  * Get self user information
  *
  * @param  {Function} callback
  * @return {Code} 200, 401
  */
  me (callback) {
    this.get('/v1/user/me', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * DELETE /v1/user/removeAllPermissions [PRIVATE]
  *
  * Remove all assigned user permissions
  *
  * @param  {Object} params
  * - @param  {String} userId * -> (In Body)  e.g 5941abf8e304bac92a6b521c
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  removeAllPermissions (body, callback) {
    let params = {url: '/v1/user/removeAllPermissions', body}
    this.delete(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * DELETE /v1/user/removeAllRoles [PRIVATE]
  *
  * Remove all assigned user roles
  *
  * @param  {Object} params
  * - @param  {String} userId * -> (In Body)  e.g 5941abf8e304bac92a6b521c
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  removeAllRoles (body, callback) {
    let params = {url: '/v1/user/removeAllRoles', body}
    this.delete(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * DELETE /v1/user/removePermissions [PRIVATE]
  *
  * Remove one or more user permissions
  *
  * @param  {Object} params
  * - @param  {String} userId * -> (In Body)  e.g 5941abf8e304bac92a6b521c
  * - @param  {Array} permissionKeynames * -> (In Body)  e.g region,user_find,department_create_name
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  removePermissions (body, callback) {
    let params = {url: '/v1/user/removePermissions', body}
    this.delete(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * DELETE /v1/user/removeRoles [PRIVATE]
  *
  * Remove one or more user roles
  *
  * @param  {Object} params
  * - @param  {String} userId * -> (In Body)  e.g 5941abf8e304bac92a6b521c
  * - @param  {Array} roleKeynames * -> (In Body)  e.g sales,support
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  removeRoles (body, callback) {
    let params = {url: '/v1/user/removeRoles', body}
    this.delete(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * PUT /v1/user/requestResetPassword [PUBLIC]
  *
  * Request reset user password
  *
  * @param  {Object} params
  * - @param  {String} email * -> (In Body)  e.g jprieto@nodriza.io
  * @param  {Function} callback
  * @return {Code} 200, 400, 404, 500
  */
  requestResetPassword (body, callback) {
    let params = {url: '/v1/user/requestResetPassword', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * PUT /v1/user/resetPassword [PUBLIC]
  *
  * Set new user password
  *
  * @param  {Object} params
  * - @param  {String} email * -> (In Body)  e.g jprieto@nodriza.io
  * - @param  {String} token * -> (In Body)  e.g c1365b60-d750-4ee0-9d71-4fb9829abdb7
  * - @param  {String} password * -> (In Body)  e.g Shox009_
  * @param  {Function} callback
  * @return {Code} 200, 400, 404, 500
  */
  resetPassword (body, callback) {
    let params = {url: '/v1/user/resetPassword', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * POST /v1/user/uploadAvatar [PRIVATE]
  *
  * Upload user avatar
  *
  * @param  {Object} params
  * - @param  {String} userId * -> (In Body)  e.g 5941abf8e304bac92a6b521c
  * - @param  {String} base64 * -> (In Body)  e.g data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAEAIAAACDgONyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0T///////8JWPfcAAAAB3RJTUUH4QcMECsiVgwe0gAABSZJREFUeNrt2j+Il3UAx/GvdUG1NBRS27m1uDjUHA2RHXSLkC0NUoctckJIgs0tRuIkFdHQn+2WloowwqUGEfXgAvFEDrvqFIRLLJdGF4eIo+e49+u1/+DzwMPvzfPlu2tubmlpfn4AEPPQ1AMAmIYAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQNTM1APYGk9999jFJ/d/evel9z5+c+otjDHG8YVzKycOX7qxsXJ5feot9/239+TI7NnzRw9d3Xv7+uqtqZ+AreQLACBKAACiBAAgSgAAogQAIEoAAKJcA0374umVN76a/f3KnZN/HJh6y06zdmFzYW1x7B6L49jUW+DBBCDtp0d/PfLzi1cP3j63emXqLTuOv362PUdAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUTNTD2BKz9995tRz3+/58omTew5MvWX7Wn/8ziu/nV5+dePd5Zen3gJbSQDSXl9/9rPXrk29Yrv7YXVt9sdflsfGWJ56CmwpR0AAUQIAECUAAFECABAlAABRAgAQ5Rpo2pHZs+ePHrq69/b11VtTb9nWDo6Hp54AW88XAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAEDUzNQDmNKpay/s++CTMca+qZfsPMcXzq2cOHzpxsbK5fWpt8CD+QIAiBIAgCgBAIgSAIAoAQCIEgCAKNdAd4jNR+59vrn/w83zb59+Z+otjDHG2oXNhbXFsXssjmNTb7lv89t7d/78+8zhi19/9M2//9XNv+6eufnWGOPQeH/qJ2Ar7ZqbW1qan596BgD/N0dAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUf8APZl9wJ7XJfQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDctMTJUMTY6NDM6MzQrMDA6MDBJXNE+AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA3LTEyVDE2OjQzOjM0KzAwOjAwOAFpggAAAABJRU5ErkJggg==
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  uploadAvatar (body, callback) {
    let params = {url: '/v1/user/uploadAvatar', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * GET /v1/user/validatePassword [PUBLIC]
  *
  * Check if password meet requirements
  *
  * @param  {Object} params
  * - @param  {String} password * -> (In query) Password to validate
  * @param  {Function} callback
  * @return {Code} 200, 400
  */
  validatePassword (params, callback) {
    let url = '/v1/user/validatePassword'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
