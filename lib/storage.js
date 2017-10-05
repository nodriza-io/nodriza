'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Storage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Storage = exports.Storage = function () {
  function Storage() {
    _classCallCheck(this, Storage);
  }

  _createClass(Storage, [{
    key: 'save',

    /**
     * Save new key in localStroge
     * 
     * @param  {String} key   
     * @param  {Any} value
     * @return {Null}
     */
    value: function save(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
    /**
     * Load saved key
     * Support deep search e.g load('key.key.key') | load('key')
     * 
     * @param  {Sring} key
     * @return {Object}
     */

  }, {
    key: 'load',
    value: function load(key) {
      if (!_lodash2.default.isString(key)) return;
      var firstKey = key.indexOf('.') !== -1 ? key.split('.')[0] : false;
      var obj = localStorage.getItem(firstKey || key);
      obj = obj ? JSON.parse(obj) : null;
      if (firstKey && !_lodash2.default.isEmpty(obj)) {
        var index = key.indexOf('.');
        obj = _lodash2.default.get(obj, key.slice(index + 1, key.length));
      }
      return obj;
    }
    /**
     * Remove key
     * 
     * @param  {Sring} key
     * @return {Object} -> Deleted item or if nothing was deleted
     */

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