'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'ami'

export class Ami extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/ami/import [PRIVATE]
  *
  * Return an object with ami imported
  *
  * @param  {Object} params
  * - @param  {String} ImageIds  -> (In query) ImageIds e.g 5941abf8e304bac92a6b521c
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  import (params, callback) {
    let url = '/v1/ami/import'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
