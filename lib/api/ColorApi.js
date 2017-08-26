'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = undefined;

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

var model = 'color';

var Color = exports.Color = function (_Request) {
  (0, _inherits3.default)(Color, _Request);

  function Color(params) {
    (0, _classCallCheck3.default)(this, Color);

    params.model = model;
    return (0, _possibleConstructorReturn3.default)(this, (Color.__proto__ || (0, _getPrototypeOf2.default)(Color)).call(this, params));
  }

  (0, _createClass3.default)(Color, [{
    key: 'getColorsFromImage',
    value: function getColorsFromImage(params, callback) {
      var url = '/v1/color/getColorsFromImage';
      if (!_lodash2.default.isEmpty(params)) url += '?' + _queryString2.default.stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'randomPalettes',
    value: function randomPalettes(params, callback) {
      var url = '/v1/color/randomPalettes';
      if (!_lodash2.default.isEmpty(params)) url += '?' + _queryString2.default.stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'topPalettes',
    value: function topPalettes(params, callback) {
      var url = '/v1/color/topPalettes';
      if (!_lodash2.default.isEmpty(params)) url += '?' + _queryString2.default.stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);
  return Color;
}(_request.Request);