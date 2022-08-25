'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = void 0;

var _numeral = _interopRequireDefault(require("numeral"));

var _axios = _interopRequireDefault(require("axios"));

var _moment = _interopRequireDefault(require("moment"));

var _pako = _interopRequireDefault(require("pako"));

var _lodash = _interopRequireDefault(require("lodash"));

var _localStorage = require("./localStorage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

if (typeof window === 'undefined') {
  // <-- Check if running in node mode
  if (!global.window) global.window = {};
  global.window['localStorage'] = new _localStorage.LocalStorage();
  global.localStorage = new _localStorage.LocalStorage();
}

var _lang = window.localStorage.getItem('lang');

if (_lang) _moment["default"].locale(_lang.replace(/"/g, ''));

var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, [{
    key: "currency",
    value: function currency(val, format) {
      format = format || '$0,0.00';
      var sym = format.slice(0, 1);
      if (_lodash["default"].isUndefined(val) || _lodash["default"].isNull(val)) return 0;
      var formatted = (0, _numeral["default"])(val).format(format);
      return sym === '$' ? formatted : sym + formatted;
    }
  }, {
    key: "getValidUrl",
    value: function getValidUrl(str) {
      if (typeof str !== 'string' || _lodash["default"].isEmpty(str)) return;
      if (str.indexOf('//') === -1) str = 'http://' + str;
      return str;
    }
  }, {
    key: "deflate",
    value: function deflate(str) {
      if (typeof str !== 'string') throw 'Expecting string to deflate, but got an ' + _typeof(str);
      return _pako["default"].deflate(str, {
        to: 'string'
      });
    }
  }, {
    key: "inflate",
    value: function inflate(str) {
      if (typeof str !== 'string') throw 'Expecting string to inflate, but got an ' + _typeof(str);
      return _pako["default"].inflate(str, {
        to: 'string'
      });
    }
  }, {
    key: "dateTimeFormat",
    value: function dateTimeFormat(time, format) {
      if (typeof time !== 'string' || _lodash["default"].isEmpty(time)) return;
      if (!format) format = 'YYYY/DD/MM HH:mm';
      var date = (0, _moment["default"])(time);
      var isToday = date.isSame((0, _moment["default"])(), 'day');
      return isToday ? date.fromNow() : date.format(format);
    }
  }, {
    key: "trimParagraph",
    value: function trimParagraph(str, maxLength, more) {
      if (typeof str !== 'string') return '';
      if (!maxLength) throw Error('Missing required key maxLength in params');
      more = more || '...';
      var exceeds = str.length > maxLength || false;
      var trimed;

      if (exceeds) {
        trimed = str.substr(0, maxLength);
        trimed = trimed.substr(0, Math.min(trimed.length, trimed.lastIndexOf(' ')));
        trimed += more;
      }

      return exceeds ? trimed : str;
    }
  }, {
    key: "trimWord",
    value: function trimWord(str, maxLength, more) {
      if (!maxLength) throw Error('Missing required key maxLength in params');
      if (typeof str != 'string') return '';
      more = more || '...';
      var exceeds = str.length > maxLength || false;
      var trimed;

      if (exceeds) {
        trimed = str.substr(0, maxLength) + more;
      }

      return exceeds ? trimed : str;
    } // Filters

  }, {
    key: "upper",
    value: function upper(s) {
      return s.toUpperCase();
    }
  }, {
    key: "lower",
    value: function lower(s) {
      return s.toLowerCase();
    }
  }, {
    key: "upperFirst",
    value: function upperFirst(string) {
      if (typeof string !== 'string') return '';
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }, {
    key: "lowerFirst",
    value: function lowerFirst(string) {
      if (typeof string !== 'string') return '';
      return string.charAt(0).toLowerCase() + string.slice(1);
    }
  }, {
    key: "kebabToText",
    value: function kebabToText(str) {
      var arr = str.split('-');

      for (var i = 0; i < arr.length; i++) {
        arr[i] = this.upperFirst(arr[i]);
      }

      return arr.join(' ').trim();
    }
  }, {
    key: "unCammel",
    value: function unCammel(str) {
      if (typeof str !== 'string') return '';
      return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3').replace(/^./, function (str) {
        return str.toUpperCase();
      });
    }
  }, {
    key: "textToKebab",
    value: function textToKebab(str) {
      return str.split(' ').join('-').toLowerCase();
    }
  }, {
    key: "camelToKebab",
    value: function camelToKebab(str) {
      var result = string;
      result = result.replace(/([a-z][A-Z])/g, function (match) {
        return match.substr(0, 1) + '-' + match.substr(1, 1).toLowerCase();
      });
      result = result.toLowerCase();
      result = result.replace(/[^-a-z0-9]+/g, '-');
      result = result.replace(/^-+/, '').replace(/-$/, '');
      return result;
    }
  }, {
    key: "req",
    value: function req(opt, callback) {
      (0, _axios["default"])(opt).then(function (res) {
        callback(null, res.data);
      })["catch"](function (err) {
        callback(err);
      });
    }
  }, {
    key: "maxFileSize",
    value: function maxFileSize(size, _maxFileSize) {
      if (size > _maxFileSize) {
        return 'Sorry, file has ' + (0, _numeral["default"])(size).format('0b') + ' and exeeded the max file size ' + (0, _numeral["default"])(_maxFileSize).format('0b');
      }

      return null;
    }
  }, {
    key: "getClientUrl",
    value: function getClientUrl() {
      if (!window) throw new Error('Function only available for browser version');
      return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    }
  }, {
    key: "objectToAscii",
    value: function objectToAscii(obj) {
      var str;

      try {
        str = window.btoa(JSON.stringify(obj));
      } catch (e) {
        str = e.toString();
      }

      return str;
    }
  }, {
    key: "asciiToObject",
    value: function asciiToObject(str) {
      var obj;

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