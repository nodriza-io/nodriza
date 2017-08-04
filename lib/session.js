'use strict'

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
}
