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
  * - @param  {String} appId  -> (In Body)  e.g 594d4b5970abb08100bf5b71
  * - @param  {String} active  -> (In Body)  e.g true
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
  * GET /v1/app/getActiveApps [PRIVATE]
  *
  * Return an array of all active apps, with their respective authentication URL
  *
  * @param  {Object} params
  * - @param  {String} successUrl * -> (In query) Redirect to this URL after successful OAuth Authentication
  * @param  {Function} callback
  * @return {Code} 200, 401, 403
  */
  getActiveApps (params, callback) {
    let url = '/v1/app/getActiveApps'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/app/getLoginApps [PUBLIC]
  *
  * Return an array of user login apps allowed to login, with their respective authentication URL
  *
  * @param  {Object} params
  * - @param  {String} successUrl * -> (In query) Redirect to this URL after successful OAuth Authentication
  * @param  {Function} callback
  * @return {Code} 200, 401
  */
  getLoginApps (params, callback) {
    let url = '/v1/app/getLoginApps'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/app/uploadLogo [PRIVATE]
  *
  * Upload app photo
  *
  * @param  {Object} params
  * - @param  {String} appId * -> (In Body)  e.g 594d4b5970abb08100bf5b71
  * - @param  {String} base64 * -> (In Body)  e.g data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAEAIAAACDgONyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0T///////8JWPfcAAAAB3RJTUUH4QcMECsiVgwe0gAABSZJREFUeNrt2j+Il3UAx/GvdUG1NBRS27m1uDjUHA2RHXSLkC0NUoctckJIgs0tRuIkFdHQn+2WloowwqUGEfXgAvFEDrvqFIRLLJdGF4eIo+e49+u1/+DzwMPvzfPlu2tubmlpfn4AEPPQ1AMAmIYAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQNTM1APYGk9999jFJ/d/evel9z5+c+otjDHG8YVzKycOX7qxsXJ5feot9/239+TI7NnzRw9d3Xv7+uqtqZ+AreQLACBKAACiBAAgSgAAogQAIEoAAKJcA0374umVN76a/f3KnZN/HJh6y06zdmFzYW1x7B6L49jUW+DBBCDtp0d/PfLzi1cP3j63emXqLTuOv362PUdAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUTNTD2BKz9995tRz3+/58omTew5MvWX7Wn/8ziu/nV5+dePd5Zen3gJbSQDSXl9/9rPXrk29Yrv7YXVt9sdflsfGWJ56CmwpR0AAUQIAECUAAFECABAlAABRAgAQ5Rpo2pHZs+ePHrq69/b11VtTb9nWDo6Hp54AW88XAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAEDUzNQDmNKpay/s++CTMca+qZfsPMcXzq2cOHzpxsbK5fWpt8CD+QIAiBIAgCgBAIgSAIAoAQCIEgCAKNdAd4jNR+59vrn/w83zb59+Z+otjDHG2oXNhbXFsXssjmNTb7lv89t7d/78+8zhi19/9M2//9XNv+6eufnWGOPQeH/qJ2Ar7ZqbW1qan596BgD/N0dAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUf8APZl9wJ7XJfQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDctMTJUMTY6NDM6MzQrMDA6MDBJXNE+AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA3LTEyVDE2OjQzOjM0KzAwOjAwOAFpggAAAABJRU5ErkJggg==
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  uploadLogo (body, callback) {
    let params = {url: '/v1/app/uploadLogo', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
