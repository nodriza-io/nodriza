'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalStorage = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var db = {};

var LocalStorage = /*#__PURE__*/function () {
  function LocalStorage() {
    _classCallCheck(this, LocalStorage);
  }

  _createClass(LocalStorage, [{
    key: "getItem",
    value: function getItem(key) {
      if (db.hasOwnProperty(key)) {
        return String(db[key]);
      }

      return null;
    }
  }, {
    key: "setItem",
    value: function setItem(key, val) {
      db[key] = String(val);
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      delete db[key];
    }
  }, {
    key: "clear",
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

exports.LocalStorage = LocalStorage;