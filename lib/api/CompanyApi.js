'use strict'
/* eslint-disable no-unused-vars */
import { Req } from '../req'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'company'

export class Company extends Req {
  constructor (params) {
    params.model = model
    super(params)
  }

  /**
  * GET /v1/company/industry [PRIVATE]
  *
  * Return an array of company industry types
  *
  * @param  {Function} callback
  * @return {Code} 200, 401
  */
  industry (callback) {
    this.get('/v1/company/industry', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * GET /v1/company/size [PRIVATE]
  *
  * Return an array of company sizes
  *
  * @param  {Function} callback
  * @return {Code} 200, 401
  */
  size (callback) {
    this.get('/v1/company/size', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
  * POST /v1/company/uploadLogo [PRIVATE]
  *
  * Upload company photo
  *
  * @param  {Object} params
  * - @param  {String} companyId * -> (In Body)  e.g 59418bcd105605cc2693a981
  * - @param  {String} base64 * -> (In Body)  e.g data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAEAIAAACDgONyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0T///////8JWPfcAAAAB3RJTUUH4QcMECsiVgwe0gAABSZJREFUeNrt2j+Il3UAx/GvdUG1NBRS27m1uDjUHA2RHXSLkC0NUoctckJIgs0tRuIkFdHQn+2WloowwqUGEfXgAvFEDrvqFIRLLJdGF4eIo+e49+u1/+DzwMPvzfPlu2tubmlpfn4AEPPQ1AMAmIYAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQNTM1APYGk9999jFJ/d/evel9z5+c+otjDHG8YVzKycOX7qxsXJ5feot9/239+TI7NnzRw9d3Xv7+uqtqZ+AreQLACBKAACiBAAgSgAAogQAIEoAAKJcA0374umVN76a/f3KnZN/HJh6y06zdmFzYW1x7B6L49jUW+DBBCDtp0d/PfLzi1cP3j63emXqLTuOv362PUdAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUTNTD2BKz9995tRz3+/58omTew5MvWX7Wn/8ziu/nV5+dePd5Zen3gJbSQDSXl9/9rPXrk29Yrv7YXVt9sdflsfGWJ56CmwpR0AAUQIAECUAAFECABAlAABRAgAQ5Rpo2pHZs+ePHrq69/b11VtTb9nWDo6Hp54AW88XAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAEDUzNQDmNKpay/s++CTMca+qZfsPMcXzq2cOHzpxsbK5fWpt8CD+QIAiBIAgCgBAIgSAIAoAQCIEgCAKNdAd4jNR+59vrn/w83zb59+Z+otjDHG2oXNhbXFsXssjmNTb7lv89t7d/78+8zhi19/9M2//9XNv+6eufnWGOPQeH/qJ2Ar7ZqbW1qan596BgD/N0dAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUf8APZl9wJ7XJfQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDctMTJUMTY6NDM6MzQrMDA6MDBJXNE+AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA3LTEyVDE2OjQzOjM0KzAwOjAwOAFpggAAAABJRU5ErkJggg==
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  uploadLogo (body, callback) {
    let params = {url: '/v1/company/uploadLogo', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
