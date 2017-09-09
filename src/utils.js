'use strict'
import numeral from 'numeral'
import axios from 'axios'

export class Utils {
  trimParagraph (str, maxLength, more) {
    if (!maxLength) throw Error('Missing required key maxLength in params')
    more = more || '...'
    const exceeds = (str.length > maxLength) || false
    let trimed
    if (exceeds) {
      trimed = str.substr(0, maxLength)
      trimed = trimed.substr(0, Math.min(trimed.length, trimed.lastIndexOf(' ')))
      trimed += more
    }
    return exceeds ? trimed : str
  }

  req (opt, callback) {
    // axios = axios.create()
    axios(opt).then((res) => {
      callback(null, res.data)
    }).catch((err) => {
      callback(err)
    })
  }

  unCammel (str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3').replace(/^./, function(str) {
      return str.toUpperCase()
    })
  }

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
