'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'fileData'

export class FileData extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * PUT /v1/fileData/delete [PRIVATE]
  *
  * Delete file or folder
  *
  * @param  {Object} params
  * - @param  {String} key  -> (In body) File or folder to delete
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  delete (body, callback) {
    let params = {url: '/v1/fileData/delete', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/fileData/getUserQuota [PRIVATE]
  *
  * Get user quota
  *
  * @param  {Object} params
  * - @param   userId  -> (In query) User ID
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  getUserQuota (params, callback) {
    let url = '/v1/fileData/getUserQuota'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/fileData/list [PRIVATE]
  *
  * List directory
  *
  * @param  {Object} params
  * - @param  {String} key  -> (In query) Directory to list
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  list (params, callback) {
    let url = '/v1/fileData/list'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * PUT /v1/fileData/rename [PRIVATE]
  *
  * Rename file
  *
  * @param  {Object} params
  * - @param  {String} key  -> (In body) Current file name
  * - @param  {String} newName  -> (In body) New file name
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  rename (body, callback) {
    let params = {url: '/v1/fileData/rename', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/fileData/upload [PRIVATE]
  *
  * Upload directory or file
  *
  * @param  {Object} params
  * - @param  {String} key  -> (In body) Directory or file to upload
  * - @param  {Integer} size  -> (In body) Total file size
  * - @param  {File} file  -> (In formData) File to upload
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  upload (body, callback) {
    let params = {url: '/v1/fileData/upload', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
