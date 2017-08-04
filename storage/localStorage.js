'use strict'

// import _ from 'lodash'

export class LocalStorage {
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
}
