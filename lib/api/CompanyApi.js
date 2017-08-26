'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Company = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _request = require('../request');

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = 'company';

var Company = exports.Company = function (_Request) {
  (0, _inherits3.default)(Company, _Request);

  function Company(params) {
    (0, _classCallCheck3.default)(this, Company);

    params.model = model;
    return (0, _possibleConstructorReturn3.default)(this, (Company.__proto__ || (0, _getPrototypeOf2.default)(Company)).call(this, params));
  }

  (0, _createClass3.default)(Company, [{
    key: 'industry',
    value: function industry(callback) {
      this.get('/v1/company/industry', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'size',
    value: function size(callback) {
      this.get('/v1/company/size', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'uploadLogo',
    value: function uploadLogo(body, callback) {
      var params = { url: '/v1/company/uploadLogo', body: body };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);
  return Company;
}(_request.Request);