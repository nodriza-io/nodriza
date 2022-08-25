'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Request = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _lodash = _interopRequireDefault(require("lodash"));

var _queryString = _interopRequireDefault(require("query-string"));

var _session = require("./session");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Request = /*#__PURE__*/function () {
  function Request(params) {
    _classCallCheck(this, Request);

    this.session = new _session.Session();
    if (params.accessToken) this.session.set({
      token: {
        accessToken: params.accessToken
      }
    });
    this.axios = _axios["default"].create();

    if (params) {
      if (!params.hostname) throw new Error('Missing required key \'hostname\' in params');
      if (!params.model) throw new Error('Missing required key \'model\' in params');
      this.model = params.model;
      this.path = '/v1/' + this.model;
      this.hostname = 'https://' + params.hostname;
      this.url = 'https://' + this.hostname;
      this.axios.defaults.baseURL = this.url;
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


  _createClass(Request, [{
    key: "req",
    value: function req(method, params, callback) {
      var _this = this;

      if (_lodash["default"].isString(params)) params = {
        url: params
      };
      var url = this.hostname ? this.hostname + params.url : params.url;
      var body = params.body;
      var headers = params.headers || {};
      if (this.session.get()) headers = Object.assign(headers, this.session.authHeader());
      if (!_lodash["default"].isEmpty(headers)) this.axios.defaults.headers = headers;
      if (_lodash["default"].isEmpty(method)) return callback(new Error('Missing required \'method\' param'));
      if (_lodash["default"].isEmpty(url)) return callback(new Error('Missing required key \'url\' in params'));
      if (method === 'get' && !_lodash["default"].isEmpty(body)) return callback(new Error('\'get\' method does not support body'));
      var opt = {
        method: method,
        url: url
      };
      if (body) opt.data = body;
      this.axios(opt).then(function (res) {
        callback(null, res.data);
      })["catch"](function (err) {
        var error = _lodash["default"].get(err, 'response.data.error');

        var status = _lodash["default"].get(err, 'response.status');

        if (status === 401 && error === 'Unauthorized, invalid token.') {
          _this.session.destroy();

          try {
            if (window) window.location.reload();
          } catch (e) {
            // console.log('e ----->', e)
            return callback(error);
          }
        }

        if (error) {
          callback(error);
        } else {
          callback(err); // throw new Error(err)
        } // callback(error || 'Unknown error ' + err.response.status)

      });
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

  }, {
    key: "get",
    value: function get(params, callback) {
      this.req('get', params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
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

  }, {
    key: "post",
    value: function post(params, callback) {
      this.req('post', params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
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

  }, {
    key: "put",
    value: function put(params, callback) {
      this.req('put', params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
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

  }, {
    key: "delete",
    value: function _delete(params, callback) {
      this.req('delete', params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
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

  }, {
    key: "create",
    value: function create(body, callback) {
      var params = {
        url: this.path,
        body: body
      };
      this.post(params, function (err, doc) {
        if (err) return callback(err);
        callback(null, doc);
      });
    }
    /*
    API FIND EXAMPLE:
     userApi.find({firstName: 'Jhon'}, (err, users) => {
      console.log(err, users)
    })
    */

  }, {
    key: "find",
    value: function find(query, callback) {
      var url = this.path;
      var str = '';

      for (var key in query) {
        str += key + '=' + (_typeof(query[key]) == 'object' ? JSON.stringify(query[key]) : query[key]) + '&';
      }

      if (str.slice(str.length - 1, str.length) === '&') str = str.slice(0, -1);
      if (!_lodash["default"].isEmpty(str)) url += '?' + str;
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /*
    API FIND ONE EXAMPLE:
     userApi.findOne('5941abf8e304bac92a6b521c', (err, user) => {
      console.log(err, user)
    })
    */

  }, {
    key: "findOne",
    value: function findOne(id, callback) {
      var url = this.path + '/' + id;
      if (!_lodash["default"].isString(id)) return callback(new Error('Invalid required key \'id\', it should be a string'));
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
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

  }, {
    key: "update",
    value: function update(id, body, callback) {
      if (!_lodash["default"].isString(id)) return callback(new Error('Invalid required key \'id\', it should be a string'));
      if (_lodash["default"].isEmpty(body)) return callback(new Error('There is nothing to update'));
      var params = {
        url: this.path + '/' + id,
        body: body
      };
      this.put(params, function (err, doc) {
        if (err) return callback(err);
        callback(null, doc);
      });
    }
    /*
    API DESTROY EXAMPLE:
     userApi.destroy('5973dc5ccd4def06ce954ae9', (err, user) => {
      console.log(err, user)
    })
    */

  }, {
    key: "destroy",
    value: function destroy(id, callback) {
      if (!_lodash["default"].isString(id)) return callback(new Error('Invalid required key \'id\', it should be a string'));
      var url = this.path + '/' + id;
      this["delete"](url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
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

  }, {
    key: "search",
    value: function search(query, callback) {
      var populate = _lodash["default"].get(query, 'populate');

      if (populate) query.populate = JSON.stringify(query.populate);

      var url = this.path + '/search?' + _queryString["default"].stringify(query);

      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
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

  }, {
    key: "exist",
    value: function exist(params, callback) {
      var key = params.key;
      var val = params.val;
      if (_lodash["default"].isEmpty(key)) return callback(new Error('Invalid required key \'key\' in params'));
      if (_lodash["default"].isEmpty(val)) return callback(new Error('Invalid required key \'val\' in params'));

      var url = this.path + '/exist?' + _queryString["default"].stringify(params);

      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /*
    API COUNT EXAMPLE:
     userApi.count({firstName: 'Jhon'}, (err, users) => {
      console.log(err, users)
    })
    */

  }, {
    key: "count",
    value: function count(query, callback) {
      var url = this.path + '/count?' + _queryString["default"].stringify(query);

      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);

  return Request;
}();

exports.Request = Request;