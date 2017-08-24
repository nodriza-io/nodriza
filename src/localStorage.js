'use strict'

let db = {}

export class LocalStorage {
  getItem (key) {
    if (db.hasOwnProperty(key)) {
      return String(db[key])
    }
    return null
  }

  setItem (key, val) {
    db[key] = String(val)
  }

  removeItem (key) {
    delete db[key]
  }

  clear () {
    var self = db
    Object.keys(self).forEach(function (key) {
      self[key] = undefined
      delete self[key]
    })
  }
}

