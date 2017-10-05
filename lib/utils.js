'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, [{
    key: 'maxFileSize',
    value: function maxFileSize(size, _maxFileSize) {
      if (size > _maxFileSize) {
        return 'Sorry, file has ' + (0, _numeral2.default)(size).format('0b') + ' and exeeded the max file size ' + (0, _numeral2.default)(_maxFileSize).format('0b');
      }
      return null;
    }
  }, {
    key: 'getClientUrl',
    value: function getClientUrl() {
      if (!window) throw new Error('Function only available for browser version');
      return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    }
  }, {
    key: 'objectToAscii',
    value: function objectToAscii(obj) {
      var str = void 0;
      try {
        str = window.btoa(JSON.stringify(obj));
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