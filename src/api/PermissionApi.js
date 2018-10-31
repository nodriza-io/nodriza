'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'permission'

export class Permission extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * PUT /v1/permission/updateDb [PRIVATE]
  *
  * Update database permissions
  *
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  updateDb (body, callback) {
    let params = {url: '/v1/permission/updateDb', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
