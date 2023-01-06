'use strict'
import _ from 'lodash'
import { Storage } from './storage'

export class Session extends Storage {
  constructor (params) {
    super()
    this.sessionName = _.get(params, 'sessionName')
  }
  /**
   * Get session
   * @return {Object}
   */
  get (key) {
    const session = this.load(this.sessionName || 'session')
    return key ? _.get(session, key) : session
  }
  /**
   * Set session
   * @param {Object}
   */
  set (session) {
    this.save(this.sessionName || 'session', session)
  }
  /**
   * Remove session
   * @return {[type]} [description]
   */
  destroy () {
    this.remove(this.sessionName || 'session')
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
