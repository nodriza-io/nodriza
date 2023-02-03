'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'events'

export class Events extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/events/allowRafPlus [PRIVATE]
  *
  * RAF+ has been activated
  *
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  allowRafPlus (callback) {
    this.get('/v1/events/allowRafPlus', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * DELETE /v1/events/destroyEventAndSiblings [PRIVATE]
  *
  * Destroy Event And Siblings
  *
  * @param  {Object} params
  * - @param  {String} docId * -> (In Body)  e.g 5a5e5c5c321c3f05a1b7fce5
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  destroyEventAndSiblings (body, callback) {
    let params = {url: '/v1/events/destroyEventAndSiblings', body}
    this.delete(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/events/docEvents [PRIVATE]
  *
  * Return an array with events by doc id
  *
  * @param  {Object} params
  * - @param  {String} id * -> (In query) Register id
  * - @param  {String} docId * -> (In query) Doc id
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  docEvents (params, callback) {
    let url = '/v1/events/docEvents'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/events/getRafPlusTrialLeft [PRIVATE]
  *
  * Get RAF+ trial version days
  *
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  getRafPlusTrialLeft (callback) {
    this.get('/v1/events/getRafPlusTrialLeft', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/events/loadMore [PRIVATE]
  *
  * Return a paginate array of events
  *
  * @param  {Object} params
  * - @param  {Number} limit * -> (In query) Register id
  * - @param  {Number} skip * -> (In query) Doc id
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  loadMore (params, callback) {
    let url = '/v1/events/loadMore'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
