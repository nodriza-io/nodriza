'use strict'
import numeral from 'numeral'
import axios from 'axios'
import pako from 'pako'
import _ from 'lodash'

export class Utils {
  currency (val, format) {
    format = format || '$0,0.00'
    const sym = format.slice(0, 1)
    if (_.isUndefined(val) || _.isNull(val)) return 0
    let formatted = numeral(val).format(format)
    return sym === '$' ? formatted : sym + formatted
  }
  getValidUrl (str) {
    if (typeof str !== 'string' || _.isEmpty(str)) return
    if (str.indexOf('//') === -1) str = 'http://' + str
    return str
  }
  deflate (str) {
    if (typeof str !== 'string') throw ('Expecting string to deflate, but got an ' + typeof str)
    return pako.deflate(str, { to: 'string' })
  }
  inflate (str) {
    if (typeof str !== 'string') throw ('Expecting string to inflate, but got an ' + typeof str)
    return pako.inflate(str, { to: 'string' })
  }  
  dateTimeFormat (time, format) {
    if (typeof time !== 'string' || _.isEmpty(time)) return
    if (!format) format = 'YYYY/DD/MM HH:mm'
    let date = moment(time)
    let isToday = date.isSame(moment(), 'day')
    return isToday ? date.fromNow() : date.format(format)
  }
  trimParagraph (str, maxLength, more) {
    if (typeof str !== 'string') return ''
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
  trimWord (str, maxLength, more) {
    if (!maxLength) throw Error('Missing required key maxLength in params')
    if (typeof str != 'string') return ''
    more = more || '...'
    const exceeds = (str.length > maxLength) || false
    let trimed
    if (exceeds) {
      trimed = str.substr(0, maxLength) + more
    }
    return exceeds ? trimed : str
  }
  // Filters
  upper (s) {
    return s.toUpperCase()
  }
  lower (s) {
    return s.toLowerCase()
  }
  upperFirst (string) {
    if (typeof string !== 'string') return ''
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  lowerFirst (string) {
    if (typeof string !== 'string') return ''
    return string.charAt(0).toLowerCase() + string.slice(1)
  }
  kebabToText (str) {
    let arr = str.split('-')
    for (var i = 0; i < arr.length; i++) {
      arr[i] = this.upperFirst(arr[i])
    }
    return arr.join(' ').trim()
  }
  unCammel (str) {
    if (typeof str !== 'string') return ''
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3').replace(/^./, function(str) {
      return str.toUpperCase()
    })
  }
  textToKebab (str) {
    return str.split(' ').join('-').toLowerCase()
  }
  camelToKebab (str) {
    var result = string;
    result = result.replace(/([a-z][A-Z])/g, function(match) {
      return match.substr(0, 1) + '-' + match.substr(1, 1).toLowerCase();
    })
    result = result.toLowerCase()
    result = result.replace(/[^-a-z0-9]+/g, '-')
    result = result.replace(/^-+/, '').replace(/-$/, '')
    return result
  }
  req (opt, callback) {
    axios(opt).then((res) => {
      callback(null, res.data)
    }).catch((err) => {
      callback(err)
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
