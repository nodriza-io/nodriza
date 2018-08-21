'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'proposalVersion'

export class ProposalVersion extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * PUT /v1/proposalVersion/rename [PRIVATE]
  *
  * Rename proposal version
  *
  * @param  {Object} params
  * - @param  {String} proposalId * -> (In Body)  e.g 5a6a8feb3ac1f301fddd3950
  * - @param  {String} versionName * -> (In Body)  e.g true
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  rename (body, callback) {
    let params = {url: '/v1/proposalVersion/rename', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * PUT /v1/proposalVersion/restore [PRIVATE]
  *
  * Rename proposal version
  *
  * @param  {Object} params
  * - @param  {String} proposalId * -> (In Body)  e.g 5a6a8feb3ac1f301fddd3950
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  restore (body, callback) {
    let params = {url: '/v1/proposalVersion/restore', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
