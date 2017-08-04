'use strict'

export class LocalStorage {
  constructor (NodelocalStorage) {
    if (typeof window === 'undefined') {
      if (!NodelocalStorage) throw new Error('Cannot run node version without localstorage')
      this.localstorage = NodelocalStorage
    } else {
      this.localStorage = localStorage
    }
  }
  /**
   * Save new key in localStroge
   * 
   * @param  {String} key   
   * @param  {Any} value
   * @return {Null}
   */
  save (key, value) {
    this.localStorage.setItem(key, JSON.stringify(value))
  }
  /**
   * Load saved key
   * 
   * @param  {Sring} key
   * @return {Object}
   */
  load (key) {
    let obj = this.localStorage.getItem(key)
    return obj ? JSON.parse(obj) : null
  }
  /**
   * Remove key
   * 
   * @param  {Sring} key
   * @return {Object} -> Deleted item or if nothing was deleted
   */
  remove (key) {
    let obj = this.localStorage.getItem(key)
    this.localStorage.removeItem(key)
    return obj
  }
}
