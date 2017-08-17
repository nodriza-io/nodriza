'use strict'

export class Storage {
  /**
   * Save new key in localStroge
   * 
   * @param  {String} key   
   * @param  {Any} value
   * @return {Null}
   */
  save (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  /**
   * Load saved key
   * 
   * @param  {Sring} key
   * @return {Object}
   */
  load (key) {
    let obj = localStorage.getItem(key)
    return obj ? JSON.parse(obj) : null
  }
  /**
   * Remove key
   * 
   * @param  {Sring} key
   * @return {Object} -> Deleted item or if nothing was deleted
   */
  remove (key) {
    let obj = localStorage.getItem(key)
    localStorage.removeItem(key)
    return obj
  }
}
