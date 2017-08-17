'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
     * 
     * @param  {Sring} key
     * @return {Object}
     */

  }, {
    key: 'load',
    value: function load(key) {
      var obj = localStorage.getItem(key);
      return obj ? JSON.parse(obj) : null;
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