'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'color'

export class Color extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * GET /v1/color/getColorsFromImage [PRIVATE]
  *
  * Return an array of color taken from an online image
  *
  * @param  {Object} params
  * - @param  {String} url  -> (In query) url of image to extract colors
  * - @param  {String} colorsNumber  -> (In query) The number of colors to generate
  * - @param  {String} sortBy  -> (In query) Sort colors by...
  * @param  {Function} callback
  * @return {Code} 200, 403
  */
  getColorsFromImage (params, callback) {
    let url = '/v1/color/getColorsFromImage'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/color/randomPalettes [PRIVATE]
  *
  * Return an array with ramdom color palettes in HEX format
  *
  * @param  {Object} params
  * - @param  {String} count  -> (In query) Number of color palettes to return
  * - @param  {String} swatchesNum  -> (In query) Number of swatches that palette should have (4 or 5 as option)
  * @param  {Function} callback
  * @return {Code} 200, 400
  */
  randomPalettes (params, callback) {
    let url = '/v1/color/randomPalettes'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/color/topPalettes [PRIVATE]
  *
  * Return an array with the best color palettes in HEX format
  *
  * @param  {Object} params
  * - @param  {String} count  -> (In query) Number of color palettes to return
  * @param  {Function} callback
  * @return {Code} 200, 400
  */
  topPalettes (params, callback) {
    let url = '/v1/color/topPalettes'
    if (!_.isEmpty(params)) url += '?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
