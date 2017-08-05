'use strict'
import _ from 'lodash'

export class Session {
  constructor (storage) {
    this.storage = storage
  }
  /**
   * Get session
   * @return {Object}
   */
  get (key) {
    const session = this.storage.load('session')
    return key ? session[key] : session
  }
  /**
   * Set session
   * @param {Object}
   */
  set (session) {
    this.storage.save('session', session)
  }
  /**
   * Remove session
   * @return {[type]} [description]
   */
  destroy () {
    this.storage.remove('session')
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
