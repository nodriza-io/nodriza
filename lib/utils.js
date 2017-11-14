'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _pako = require('pako');

var _pako2 = _interopRequireDefault(_pako);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, [{
    key: 'getValidUrl',
    value: function getValidUrl(str) {
      if (typeof str !== 'string' || _lodash2.default.isEmpty(str)) return;
      if (str.indexOf('//') === -1) str = 'http://' + str;
      return str;
    }
  }, {
    key: 'deflate',
    value: function deflate(str) {
      if (typeof str !== 'string') throw 'Expecting string to deflate, but got an ' + (typeof str === 'undefined' ? 'undefined' : _typeof(str));
      return _pako2.default.deflate(str, { to: 'string' });
    }
  }, {
    key: 'inflate',
    value: function inflate(str) {
      if (typeof str !== 'string') throw 'Expecting string to inflate, but got an ' + (typeof str === 'undefined' ? 'undefined' : _typeof(str));
      return _pako2.default.inflate(str, { to: 'string' });
    }
  }, {
    key: 'dateTimeFormat',
    value: function dateTimeFormat(time, format) {
      if (typeof time !== 'string' || _lodash2.default.isEmpty(time)) return;
      if (!format) format = 'YYYY/DD/MM HH:mm';
      var date = (0, _moment2.default)(time);
      var isToday = date.isSame((0, _moment2.default)(), 'day');
      return isToday ? date.fromNow() : date.format(format);
    }
  }, {
    key: 'trimParagraph',
    value: function trimParagraph(str, maxLength, more) {
      if (typeof str !== 'string') return '';
      if (!maxLength) throw Error('Missing required key maxLength in params');
      more = more || '...';
      var exceeds = str.length > maxLength || false;
      var trimed = void 0;
      if (exceeds) {
        trimed = str.substr(0, maxLength);
        trimed = trimed.substr(0, Math.min(trimed.length, trimed.lastIndexOf(' ')));
        trimed += more;
      }
      return exceeds ? trimed : str;
    }
  }, {
    key: 'trimWord',
    value: function trimWord(str, maxLength, more) {
      if (!maxLength) throw Error('Missing required key maxLength in params');
      if (typeof str != 'string') return '';
      more = more || '...';
      var exceeds = str.length > maxLength || false;
      var trimed = void 0;
      if (exceeds) {
        trimed = str.substr(0, maxLength) + more;
      }
      return exceeds ? trimed : str;
    }
    // Filters

  }, {
    key: 'upper',
    value: function upper(s) {
      return s.toUpperCase();
    }
  }, {
    key: 'lower',
    value: function lower(s) {
      return s.toLowerCase();
    }
  }, {
    key: 'upperFirst',
    value: function upperFirst(string) {
      if (typeof string !== 'string') return '';
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }, {
    key: 'lowerFirst',
    value: function lowerFirst(string) {
      if (typeof string !== 'string') return '';
      return string.charAt(0).toLowerCase() + string.slice(1);
    }
  }, {
    key: 'kebabToText',
    value: function kebabToText(str) {
      var arr = str.split('-');
      for (var i = 0; i < arr.length; i++) {
        arr[i] = this.upperFirst(arr[i]);
      }
      return arr.join(' ').trim();
    }
  }, {
    key: 'unCammel',
    value: function unCammel(str) {
      if (typeof str !== 'string') return '';
      return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3').replace(/^./, function (str) {
        return str.toUpperCase();
      });
    }
  }, {
    key: 'textToKebab',
    value: function textToKebab(str) {
      return str.split(' ').join('-').toLowerCase();
    }
  }, {
    key: 'camelToKebab',
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
    key: 'req',
    value: function req(opt, callback) {
      (0, _axios2.default)(opt).then(function (res) {
        callback(null, res.data);
      }).catch(function (err) {
        callback(err);
      });
    }
  }, {
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