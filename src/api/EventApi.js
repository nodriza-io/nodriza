'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'event'

export class Event extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/event/allowRafPlus [PRIVATE]
  *
  * RAF+ has been activated
  *
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  allowRafPlus (callback) {
    this.get('/v1/event/allowRafPlus', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * DELETE /v1/event/destroyEventAndSiblings [PRIVATE]
  *
  * Destroy Event And Siblings
  *
  * @param  {Object} params
  * - @param  {String} docId * -> (In Body)  e.g 5a5e5c5c321c3f05a1b7fce5
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  destroyEventAndSiblings (body, callback) {
    let params = {url: '/v1/event/destroyEventAndSiblings', body}
    this.delete(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/event/docEvents [PRIVATE]
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
    let url = '/v1/event/docEvents'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/event/getRafPlusTrialLeft [PRIVATE]
  *
  * Get RAF+ trial version days
  *
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  getRafPlusTrialLeft (callback) {
    this.get('/v1/event/getRafPlusTrialLeft', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/event/loadMore [PRIVATE]
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
    let url = '/v1/event/loadMore'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/event/rafPlusStatus [PRIVATE]
  *
  * Return RAF+ Object status
  *
  * @param  {Function} callback
  * @return {Code} 200, 400
  */
  rafPlusStatus (callback) {
    this.get('/v1/event/rafPlusStatus', (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
