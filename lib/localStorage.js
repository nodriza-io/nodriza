'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalStorage = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = {};

var LocalStorage = exports.LocalStorage = function () {
  function LocalStorage() {
    (0, _classCallCheck3.default)(this, LocalStorage);
  }

  (0, _createClass3.default)(LocalStorage, [{
    key: 'getItem',
    value: function getItem(key) {
      if (db.hasOwnProperty(key)) {
        return String(db[key]);
      }
      return null;
    }
  }, {
    key: 'setItem',
    value: function setItem(key, val) {
      db[key] = String(val);
    }
  }, {
    key: 'removeItem',
    value: function removeItem(key) {
      delete db[key];
    }
  }, {
    key: 'clear',
    value: function clear() {
      var self = db;
      (0, _keys2.default)(self).forEach(function (key) {
        self[key] = undefined;
        delete self[key];
      });
    }
  }]);
  return LocalStorage;
}();