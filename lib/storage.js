'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Storage = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Storage = exports.Storage = function () {
  function Storage() {
    (0, _classCallCheck3.default)(this, Storage);
  }

  (0, _createClass3.default)(Storage, [{
    key: 'save',
    value: function save(key, value) {
      localStorage.setItem(key, (0, _stringify2.default)(value));
    }
  }, {
    key: 'load',
    value: function load(key) {
      var obj = localStorage.getItem(key);
      return obj ? JSON.parse(obj) : null;
    }
  }, {
    key: 'remove',
    value: function remove(key) {
      var obj = localStorage.getItem(key);
      localStorage.removeItem(key);
      return obj;
    }
  }]);
  return Storage;
}();