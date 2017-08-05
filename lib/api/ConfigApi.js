'use strict'
/* eslint-disable no-unused-vars */
import { Req } from '../req'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'config'

export class Config extends Req {
  constructor (params) {
    params.model = model
    super(params)
  }

  /**
  * GET /v1/config/public [PUBLIC]
  *
  * Return public configuration
  *
  * @param  {Function} callback
  * @return {Code} 200, 400
  */
  public (callback) {
    this.get('/v1/config/public', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
