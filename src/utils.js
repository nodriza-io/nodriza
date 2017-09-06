'use strict'
import numeral from 'numeral'

export class Utils {
  maxFileSize (size, maxFileSize) {
    if (size > maxFileSize) {
      return 'Sorry, file has ' + numeral(size).format('0b') + ' and exeeded the max file size ' + numeral(maxFileSize).format('0b')
    }
    return null
  }

  getClientUrl () {
    if (!window) throw new Error('Function only available for browser version')
    return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '')
  }

  objectToAscii (obj) {
    let str
    try {
      str = window.btoa(JSON.stringify(obj))
    } catch(e) {
      str = e.toString()
    }
    return str
  }

  asciiToObject (str) {
    let obj
    try {
      obj = JSON.parse(window.atob(str))
    } catch(e) {
      obj = e.toString()
    }
    return obj
  }
}
