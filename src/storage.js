'use strict'
import _ from 'lodash'

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
   * Support deep search e.g load('key.key.key') | load('key')
   * 
   * @param  {Sring} key
   * @return {Object}
   */
  load (key) {
    if (!_.isString(key)) return
    const firstKey = key.indexOf('.') !== -1 ? key.split('.')[0] : false
    let obj = localStorage.getItem(firstKey || key)
    obj = obj ? JSON.parse(obj) : null
    if (firstKey && !_.isEmpty(obj)) {
      const index = key.indexOf('.')
      obj = _.get(obj, key.slice(index + 1, key.length))
    }
    return obj
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
