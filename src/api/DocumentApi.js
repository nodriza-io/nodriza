'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'document'

export class Document extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/document/getTemplate/{docType}/{docId}/raw [PUBLIC]
  *
  * Generate swagger documentation
  *
  * @param  {Object} params
  * - @param  {String} docType * -> (In path) document type e.g proposal
  * - @param  {String} docId * -> (In path) document id
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  getTemplate (params, callback) {
    this.get('/v1/document/getTemplate/{docType}//raw' + params['docId'], (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
