'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Utils = function () {
  function Utils() {
    (0, _classCallCheck3.default)(this, Utils);
  }

  (0, _createClass3.default)(Utils, [{
    key: 'maxFileSize',
    value: function maxFileSize(size, _maxFileSize) {
      if (size > _maxFileSize) {
        return 'Sorry, file has ' + (0, _numeral2.default)(size).format('0b') + ' and exeeded the max file size ' + (0, _numeral2.default)(_maxFileSize).format('0b');
      }
      return null;
    }
  }, {
    key: 'objectToAscii',
    value: function objectToAscii(obj) {
      var str = void 0;
      try {
        str = window.btoa((0, _stringify2.default)(obj));
      } catch (e) {
        str = e.toString();
      }
      return str;
    }
  }, {
    key: 'asciiToObject',
    value: function asciiToObject(str) {
      var obj = void 0;
      try {
        obj = JSON.parse(window.atob(str));
      } catch (e) {
        obj = e.toString();
      }
      return obj;
    }
  }]);
  return Utils;
}();

exports.Utils = Utils;