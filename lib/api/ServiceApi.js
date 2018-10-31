'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Service = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('../request');

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var model = 'service';

var Service = exports.Service = function (_Request) {
  _inherits(Service, _Request);

  function Service(params) {
    _classCallCheck(this, Service);

    params.model = model;
    return _possibleConstructorReturn(this, (Service.__proto__ || Object.getPrototypeOf(Service)).call(this, params));
  }

  _createClass(Service, [{
    key: 'base64Image',
    value: function base64Image(params, callback) {
      var url = '/v1/service/base64Image';
      if (!_lodash2.default.isEmpty(params)) url += '?' + _queryString2.default.stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'export',
    value: function _export(params, callback) {
      var url = '/v1/service/export';
      if (!_lodash2.default.isEmpty(params)) url += '?' + _queryString2.default.stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'genRandomDoc',
    value: function genRandomDoc(body, callback) {
      var params = { url: '/v1/service/genRandomDoc', body: body };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'generateAvatar',
    value: function generateAvatar(params, callback) {
      var url = '/v1/service/generateAvatar';
      if (!_lodash2.default.isEmpty(params)) url += '?' + _queryString2.default.stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'getRouteControllers',
    value: function getRouteControllers(callback) {
      this.get('/v1/service/getRouteControllers', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'getTrialExpiration',
    value: function getTrialExpiration(body, callback) {
      var params = { url: '/v1/service/getTrialExpiration', body: body };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'iconSearch',
    value: function iconSearch(params, callback) {
      var url = '/v1/service/iconSearch';
      if (!_lodash2.default.isEmpty(params)) url += '?' + _queryString2.default.stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'import',
    value: function _import(body, callback) {
      var params = { url: '/v1/service/import', body: body };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'pdf',
    value: function pdf(params, callback) {
      var url = '/v1/service/pdf';
      if (!_lodash2.default.isEmpty(params)) url += '?' + _queryString2.default.stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'pdfPreview',
    value: function pdfPreview(body, callback) {
      var params = { url: '/v1/service/pdfPreview', body: body };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'qr',
    value: function qr(params, callback) {
      var url = '/v1/service/qr';
      if (!_lodash2.default.isEmpty(params)) url += '?' + _queryString2.default.stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'systemAvailability',
    value: function systemAvailability(callback) {
      this.get('/v1/service/systemAvailability', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'version',
    value: function version(callback) {
      this.get('/v1/service/version', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'webhook',
    value: function webhook(body, callback) {
      var params = { url: '/v1/service/webhook', body: body };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'webhook',
    value: function webhook(body, callback) {
      var params = { url: '/v1/service/webhook', body: body };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'webhook',
    value: function webhook(body, callback) {
      var params = { url: '/v1/service/webhook', body: body };
      this.get(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);

  return Service;
}(_request.Request);