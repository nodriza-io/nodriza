'use strict'
import _ from 'lodash'
import { Storage } from './storage'

export class Session extends Storage {
  constructor (params) {
    super()
    const customName = _.get(params, 'name')
    this.name = customName || 'session'
  }
  /**
   * Get session
   * @return {Object}
   */
  get (key) {
    const session = this.load(this.name)
    return key ? _.get(session, key) : session
  }
  /**
   * Set session
   * @param {Object}
   */
  set (session) {
    this.save(this.name, session)
  }
  /**
   * Remove session
   * @return {[type]} [description]
   */
  destroy () {
    this.remove(this.name)
  }

  bearer () {
    const session = this.get()
    const accessToken = _.get(session, 'token.accessToken')
    return accessToken ? 'bearer ' + accessToken : null
  }

  authHeader () {
    const bearer = this.bearer()
    return bearer ? {authorization: bearer} : null
  }
}
