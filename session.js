'use strict'

export class Session {
  constructor (storage) {
    this.storage = storage
  }
  /**
   * Get session
   * @return {Object}
   */
  get () {
    return this.storage.load('session')
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
