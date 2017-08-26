'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Request = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _session = require('./session');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Request = exports.Request = function () {
  function Request(params) {
    (0, _classCallCheck3.default)(this, Request);

    this.session = new _session.Session();
    if (params.accessToken) this.session.set({ token: { accessToken: params.accessToken } });
    this.axios = _axios2.default.create();
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

  (0, _createClass3.default)(Request, [{
    key: 'req',
    value: function req(method, params, callback) {
      if (_lodash2.default.isString(params)) params = { url: params };
      var url = this.hostname ? this.hostname + params.url : params.url;
      var body = params.body;
      var headers = params.headers || {};
      if (this.session.get()) headers = (0, _assign2.default)(headers, this.session.authHeader());
      if (!_lodash2.default.isEmpty(headers)) this.axios.defaults.headers = headers;
      if (_lodash2.default.isEmpty(url)) return callback(new Error('Missing required \'method\' param'));
      if (_lodash2.default.isEmpty(url)) return callback(new Error('Missing required key \'url\' in params'));
      if (method === 'get' && !_lodash2.default.isEmpty(body)) return callback(new Error('\'get\' method does not support body'));
      var fn = void 0;
      if (!body) {
        fn = this.axios[method](url);
      } else {
        fn = this.axios[method](url, body);
      }
      fn.then(function (res) {
        callback(null, res.data);
      }).catch(function (err) {
        var error = _lodash2.default.get(err, 'response.data.error');
        if (error) {
          callback(error);
        } else {
          console.log('->>> err:', err);
          throw new Error(err);
        }
      });
    }
  }, {
    key: 'get',
    value: function get(params, callback) {
      this.req('get', params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'post',
    value: function post(params, callback) {
      this.req('post', params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'put',
    value: function put(params, callback) {
      this.req('put', params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'delete',
    value: function _delete(params, callback) {
      this.req('delete', params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'create',
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
  }, {
    key: 'find',
    value: function find(query, callback) {
      var url = this.path;
      if (!_lodash2.default.isEmpty(query)) url += '?' + _queryString2.default.stringify(query);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'findOne',
    value: function findOne(id, callback) {
      var url = this.path + '/' + id;
      if (!_lodash2.default.isString(id)) return callback(new Error('Invalid required key \'id\', it should be a string'));
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'update',
    value: function update(id, body, callback) {
      if (!_lodash2.default.isString(id)) return callback(new Error('Invalid required key \'id\', it should be a string'));
      if (_lodash2.default.isEmpty(body)) return callback(new Error('There is nothing to update'));
      var params = {
        url: this.path + '/' + id,
        body: body
      };
      this.put(params, function (err, doc) {
        if (err) return callback(err);
        callback(null, doc);
      });
    }
  }, {
    key: 'destroy',
    value: function destroy(id, callback) {
      if (!_lodash2.default.isString(id)) return callback(new Error('Invalid required key \'id\', it should be a string'));
      var url = this.path + '/' + id;
      this.delete(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'search',
    value: function search(query, callback) {
      var populate = _lodash2.default.get(query, 'populate');
      if (populate) query.populate = (0, _stringify2.default)(query.populate);
      var url = this.path + '/search?' + _queryString2.default.stringify(query);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'exist',
    value: function exist(params, callback) {
      var key = params.key;
      var val = params.val;
      if (_lodash2.default.isEmpty(key)) return callback(new Error('Invalid required key \'key\' in params'));
      if (_lodash2.default.isEmpty(val)) return callback(new Error('Invalid required key \'val\' in params'));
      var url = this.path + '/exist?' + _queryString2.default.stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'count',
    value: function count(query, callback) {
      var url = this.path + '/count?' + _queryString2.default.stringify(query);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);
  return Request;
}();