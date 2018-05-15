'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Session = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _storage = require('./storage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Session = exports.Session = function (_Storage) {
  _inherits(Session, _Storage);

  function Session() {
    _classCallCheck(this, Session);

    return _possibleConstructorReturn(this, (Session.__proto__ || Object.getPrototypeOf(Session)).call(this));
  }

  _createClass(Session, [{
    key: 'get',
    value: function get(key) {
      var session = this.load('session');
      return key ? _lodash2.default.get(session, key) : session;
    }
  }, {
    key: 'set',
    value: function set(session) {
      this.save('session', session);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.remove('session');
    }
  }, {
    key: 'bearer',
    value: function bearer() {
      var session = this.get();
      var accessToken = _lodash2.default.get(session, 'token.accessToken');
      return accessToken ? 'bearer ' + accessToken : null;
    }
  }, {
    key: 'authHeader',
    value: function authHeader() {
      var bearer = this.bearer();
      return bearer ? { authorization: bearer } : null;
    }
  }]);

  return Session;
}(_storage.Storage);