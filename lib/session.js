'use strict'
import _ from 'lodash'
import { Storage } from './storage'

export class Session extends Storage {
  constructor () {
    super()
  }
  /**
   * Get session
   * @return {Object}
   */
  get (key) {
    const session = this.load('session')
    return key ? session[key] : session
  }
  /**
   * Set session
   * @param {Object}
   */
  set (session) {
    this.save('session', session)
  }
  /**
   * Remove session
   * @return {[type]} [description]
   */
  destroy () {
    this.remove('session')
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
