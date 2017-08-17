'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var db = {};

var LocalStorage = exports.LocalStorage = function () {
  function LocalStorage() {
    _classCallCheck(this, LocalStorage);
  }

  _createClass(LocalStorage, [{
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
      Object.keys(self).forEach(function (key) {
        self[key] = undefined;
        delete self[key];
      });
    }
  }]);

  return LocalStorage;
}();