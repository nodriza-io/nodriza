'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Request = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _session = require('./session');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Request = exports.Request = function () {
  function Request(params) {
    _classCallCheck(this, Request);

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

  _createClass(Request, [{
    key: 'req',
    value: function req(method, params, callback) {
      var _this = this;

      if (_lodash2.default.isString(params)) params = { url: params };
      var url = this.hostname ? this.hostname + params.url : params.url;
      var body = params.body;
      var headers = params.headers || {};
      if (this.session.get()) headers = Object.assign(headers, this.session.authHeader());
      if (!_lodash2.default.isEmpty(headers)) this.axios.defaults.headers = headers;
      if (_lodash2.default.isEmpty(method)) return callback(new Error('Missing required \'method\' param'));
      if (_lodash2.default.isEmpty(url)) return callback(new Error('Missing required key \'url\' in params'));
      if (method === 'get' && !_lodash2.default.isEmpty(body)) return callback(new Error('\'get\' method does not support body'));
      var opt = {
        method: method,
        url: url
      };
      if (body) opt.data = body;
      this.axios(opt).then(function (res) {
        callback(null, res.data);
      }).catch(function (err) {
        var error = _lodash2.default.get(err, 'response.data.error');
        var status = _lodash2.default.get(err, 'response.status');
        if (status === 401 && error === 'Unauthorized, invalid token.') {
          _this.session.destroy();
          if (window) window.location.reload();
        }
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
      var str = '';
      for (var key in query) {
        str += key + '=' + (_typeof(query[key]) == 'object' ? JSON.stringify(query[key]) : query[key]) + '&';
      }
      if (str.slice(str.length - 1, str.length) === '&') str = str.slice(0, -1);
      if (!_lodash2.default.isEmpty(str)) url += '?' + str;
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
      if (populate) query.populate = JSON.stringify(query.populate);
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