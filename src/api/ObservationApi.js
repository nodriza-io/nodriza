'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'observation'

export class Observation extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/observation/run [PRIVATE]
  *
  * Observation run
  *
  * @param  {Function} callback
  * @return {Code} 200, 400
  */
  run (callback) {
    this.get('/v1/observation/run', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
