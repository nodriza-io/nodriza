'use strict'
import numeral from 'numeral'

export class Utils {
  maxFileSize(size, maxFileSize) {
    if (size > maxFileSize) {
      return 'Sorry, file has ' + numeral(size).format('0b') + ' and exeeded the max file size ' + numeral(maxFileSize).format('0b')
    }
    return null
  }
}
