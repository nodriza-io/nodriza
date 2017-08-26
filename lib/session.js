'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Session = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _storage = require('./storage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Session = exports.Session = function (_Storage) {
  (0, _inherits3.default)(Session, _Storage);

  function Session() {
    (0, _classCallCheck3.default)(this, Session);
    return (0, _possibleConstructorReturn3.default)(this, (Session.__proto__ || (0, _getPrototypeOf2.default)(Session)).call(this));
  }

  (0, _createClass3.default)(Session, [{
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