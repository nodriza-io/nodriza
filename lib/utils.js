'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, [{
    key: 'trimParagraph',
    value: function trimParagraph(str, maxLength, more) {
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
    key: 'req',
    value: function req(opt, callback) {
      (0, _axios2.default)(opt).then(function (res) {
        callback(null, res.data);
      }).catch(function (err) {
        callback(err);
      });
    }
  }, {
    key: 'unCammel',
    value: function unCammel(str) {
      return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3').replace(/^./, function (str) {
        return str.toUpperCase();
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
  }], [{
    key: 'upperFirst',
    value: function upperFirst(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }, {
    key: 'lowerFirst',
    value: function lowerFirst(string) {
      return string.charAt(0).toLowerCase() + string.slice(1);
    }
  }]);

  return Utils;
}();

exports.Utils = Utils;