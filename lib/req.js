'use strict'
import axios from 'axios'
import _ from 'lodash'
import queryString from 'query-string'

export class Req {
  constructor (params) {
    for (let prop in params) this[prop] = params[prop]
    this.axios = axios.create()
    if (params) {
      if (!params.hostname) throw new Error('Missing required key \'hostname\' in params')
      if (!params.model) throw new Error('Missing required key \'model\' in params')
      this.model = params.model
      this.path = '/v1/' + this.model 
      this.hostname = 'https://' + params.hostname
      this.url = 'https://' + this.hostname
      this.axios.defaults.baseURL = this.url
    }
  }
  /**
  * Create only one way for API request to ensure always
  * the same response and behabor
  *
  * @param {String} method * -> Req method type
  * @param {Object]}  params
  * - @param {String]} url * -> Req url
  * - @param {Object]} headers -> Req headers
  * - @param {Object]} body -> Req body
  * @param  {Function} callback
  * @return {Object} -> Error message or anything
  */
  req (method, params, callback) {
    if (_.isString(params)) params = {url: params}
    const url = this.hostname ? this.hostname + params.url : params.url
    const body = params.body
    let headers = params.headers || {}
    if (this.session.get()) headers = Object.assign(headers, this.session.authHeader())
    if (!_.isEmpty(headers)) this.axios.defaults.headers = headers
    if (_.isEmpty(url)) return callback(new Error('Missing required \'method\' param'))
    if (_.isEmpty(url)) return callback(new Error('Missing required key \'url\' in params'))
    if (method === 'get' && !_.isEmpty(body)) return callback(new Error('\'get\' method does not support body'))
    let fn
    if (!body) {
      fn = this.axios[method](url)
    } else {
      fn = this.axios[method](url, body)
    }
    fn.then((res) => {
      callback(null, res.data)
    }).catch((err) => {
      const error = _.get(err, 'response.data.error')
      callback(error || 'Unknown error ' + err.response.status)
    })
  }

  /*
   ____    ____  ________  _________  ____  ____   ___   ______     ______
  |_   \  /   _||_   __  ||  _   _  ||_   ||   _|.'   `.|_   _ `. .' ____ \
    |   \/   |    | |_ \_||_/ | | \_|  | |__| | /  .-.  \ | | `. \| (___ \_|
    | |\  /| |    |  _| _     | |      |  __  | | |   | | | |  | | _.____`.
   _| |_\/_| |_  _| |__/ |   _| |_    _| |  | |_\  `-'  /_| |_.' /| \____) |
  |_____||_____||________|  |_____|  |____||____|`.___.'|______.'  \______.'

  */

  /**
   * Requests using GET should only retrieve data.
   *
   * @param {Object} * params
   * - @param {String} * url -> Request endpoint
   * - @param {String} * headers -> Request headers
   * @param {Function} callback
   * @return {Any} -> Error or any type of data in response
   */
  get (params, callback) {
    this.req('get', params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
   * Requests using POST should only retrieve data.
   *
   * @param  {Object} * params
   * - @param  {String} * url -> Request endpoint
   * - @param  {String} * headers -> Request headers
   * - @param  {String} body -> Request body
   * @param  {Function} callback
   * @return {Any} -> Error or any type of data in response
   */
  post (params, callback) {
    this.req('post', params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
   * Requests using PUT should only retrieve data.
   *
   * @param  {Object} * params
   * - @param  {String} * url -> Request endpoint
   * - @param  {String} * headers -> Request headers
   * - @param  {String} body -> Request body
   * @param  {Function} callback
   * @return {Any} -> Error or any type of data in response
   */
  put (params, callback) {
    this.req('put', params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /**
   * Requests using DELETE should only retrieve data.
   *
   * @param  {Object} * params
   * - @param  {String} * url -> Request endpoint
   * - @param  {String} * headers -> Request headers 
   * - @param  {String} body -> Request body 
   * @param  {Function} callback
   * @return {Any} -> Error or any type of data in response
   */
  delete (params, callback) {
    this.req('delete', params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }

  /*
   ______   _____  _____  _____  ________  _______  _______     _____  ____  _____  _________   ______
  |_   _ \ |_   _||_   _||_   _||_   __  ||_   __ \|_   __ \   |_   _||_   \|_   _||  _   _  |.' ____ \
    | |_) |  | |    | |    | |    | |_ \_|  | |__) | | |__) |    | |    |   \ | |  |_/ | | \_|| (___ \_|
    |  __'.  | |   _| '    ' |    |  _| _   |  ___/  |  __ /     | |    | |\ \| |      | |     _.____`.
   _| |__) |_| |__/ |\ \__/ /    _| |__/ | _| |_    _| |  \ \_  _| |_  _| |_\   |_    _| |_   | \____) |
  |_______/|________| `.__.'    |________||_____|  |____| |___||_____||_____|\____|  |_____|   \______.'

  */

  /*
  API CREATE EXAMPLE:

  let body = {
    firstName: 'Jhon',
    lastName: 'Doe',
    email: 'jdoe@nodriza.io',
    company: '596fc689ef2bfd00983b607f'
  }
  userApi.create(body, (err, user) => {
    console.log(err, user)
  })

  */
  create (body, callback) {
    let params = {
      url: this.path,
      body
    }
    this.post(params, (err, doc) => {
      if (err) return callback(err)
      callback(null, doc)
    })
  }
  /*
  API FIND EXAMPLE:

  userApi.find({firstName: 'Jhon'}, (err, users) => {
    console.log(err, users)
  })
  */
  find (query, callback) {
    let url = this.path
    if (!_.isEmpty(query)) url += '?' + queryString.stringify(query)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /*
  API FIND ONE EXAMPLE:

  userApi.findOne('5941abf8e304bac92a6b521c', (err, user) => {
    console.log(err, user)
  })
  */
  findOne (id, callback) {
    let url = this.path + '/' + id
    if (!_.isString(id)) return callback(new Error('Invalid required key \'id\', it should be a string'))
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /*
  API UPDATE EXAMPLE:

  let body = {
    firstName: 'Peter'
  }
  userApi.update('5973dc5ccd4def06ce954ae9', body, (err, user) => {
    console.log(err, user)
  })
  */
  update (id, body, callback) {
    if (!_.isString(id)) return callback(new Error('Invalid required key \'id\', it should be a string'))
    if (_.isEmpty(body)) return callback(new Error('There is nothing to update'))
    let params = {
      url: this.path + '/' + id,
      body
    }
    this.put(params, (err, doc) => {
      if (err) return callback(err)
      callback(null, doc)
    })
  }
  /*
  API DESTROY EXAMPLE:

  userApi.destroy('5973dc5ccd4def06ce954ae9', (err, user) => {
    console.log(err, user)
  })
  */
  destroy (id, callback) {
    if (!_.isString(id)) return callback(new Error('Invalid required key \'id\', it should be a string'))
    let url = this.path + '/' + id
    this.delete(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /*
  API SEARCH EXAMPLE:

    criteria: 'prieto',
    searchFields: 'firstName,lastName,email',
    selectedFields: 'firstName,lastName,email,company',
    populate: {'company': ['name', 'shortname'], 'department': ['name']}
  }
  userApi.search(params, (err, results) => {
    console.log(err, results)
  })
  */
  search (query, callback) {
    let populate = _.get(query, 'populate')
    if (populate) query.populate = JSON.stringify(query.populate)
    let url = this.path + '/search?' + queryString.stringify(query)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /*
  API EXIST EXAMPLE:

  let query = {
    key: 'firstName',
    val: 'Jhon'
  }
  userApi.exist(query, (err, results) => {
    console.log(err, results)
  })
  */
  exist (params, callback) {
    const key = params.key
    const val = params.val
    if (_.isEmpty(key)) return callback(new Error('Invalid required key \'key\' in params'))
    if (_.isEmpty(val)) return callback(new Error('Invalid required key \'val\' in params'))
    let url = this.path + '/exist?' + queryString.stringify(params)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /*
  API COUNT EXAMPLE:

  userApi.count({firstName: 'Jhon'}, (err, users) => {
    console.log(err, users)
  })
  */
  count (query, callback) {
    let url = this.path + '/count?' + queryString.stringify(query)
    this.get(url, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
