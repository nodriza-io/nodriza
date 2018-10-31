'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Invoice = undefined;

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

var model = 'invoice';

var Invoice = exports.Invoice = function (_Request) {
  _inherits(Invoice, _Request);

  function Invoice(params) {
    _classCallCheck(this, Invoice);

    params.model = model;
    return _possibleConstructorReturn(this, (Invoice.__proto__ || Object.getPrototypeOf(Invoice)).call(this, params));
  }

  _createClass(Invoice, [{
    key: 'changeStatus',
    value: function changeStatus(body, callback) {
      var params = { url: '/v1/invoice/changeStatus', body: body };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'generateCommissionPo',
    value: function generateCommissionPo(body, callback) {
      var params = { url: '/v1/invoice/generateCommissionPo', body: body };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'getNextNumber',
    value: function getNextNumber(callback) {
      this.get('/v1/invoice/getNextNumber', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'notifyStatus',
    value: function notifyStatus(body, callback) {
      var params = { url: '/v1/invoice/notifyStatus', body: body };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'paymentAvailability',
    value: function paymentAvailability(params, callback) {
      var url = '/v1/invoice/paymentAvailability';
      if (!_lodash2.default.isEmpty(params)) url += '?' + _queryString2.default.stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'recordPayment',
    value: function recordPayment(body, callback) {
      var params = { url: '/v1/invoice/recordPayment', body: body };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'sendReminder',
    value: function sendReminder(body, callback) {
      var params = { url: '/v1/invoice/sendReminder', body: body };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'share',
    value: function share(body, callback) {
      var params = { url: '/v1/invoice/share', body: body };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'starred',
    value: function starred(body, callback) {
      var params = { url: '/v1/invoice/starred', body: body };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);

  return Invoice;
}(_request.Request);