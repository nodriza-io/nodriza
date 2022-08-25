'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Storage = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Storage = /*#__PURE__*/function () {
  function Storage() {
    _classCallCheck(this, Storage);
  }

  _createClass(Storage, [{
    key: "save",
    value:
    /**
     * Save new key in localStroge
     * 
     * @param  {String} key   
     * @param  {Any} value
     * @return {Null}
     */
    function save(key, value) {
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
    key: "load",
    value: function load(key) {
      if (!_lodash["default"].isString(key)) return;
      var firstKey = key.indexOf('.') !== -1 ? key.split('.')[0] : false;
      var obj = localStorage.getItem(firstKey || key);
      obj = obj ? JSON.parse(obj) : null;

      if (firstKey && !_lodash["default"].isEmpty(obj)) {
        var index = key.indexOf('.');
        obj = _lodash["default"].get(obj, key.slice(index + 1, key.length));
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
    key: "remove",
    value: function remove(key) {
      var obj = localStorage.getItem(key);
      localStorage.removeItem(key);
      return obj;
    }
  }]);

  return Storage;
}();

exports.Storage = Storage;