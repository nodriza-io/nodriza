'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'chatbot'

export class Chatbot extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * POST /v1/chatbot/generate [PRIVATE]
  *
  * Generate proposal from chatbot
  *
  * @param  {Object} params
  * - @param  {Object} to * -> (In Body)  e.g [object Object]
  * - @param  {Object} proposal * -> (In Body)  e.g [object Object]
  * - @param  {Array} agentAssigned  -> (In Body)  e.g [object Object]
  * - @param  {Boolean} emailClient  -> (In Body)  e.g true
  * - @param  {Boolean} emailAgent  -> (In Body)  e.g true
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  generate (body, callback) {
    let params = {url: '/v1/chatbot/generate', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
