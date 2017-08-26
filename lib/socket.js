'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Socket = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Socket = exports.Socket = function (_EventEmitter) {
  (0, _inherits3.default)(Socket, _EventEmitter);

  function Socket(hostname) {
    (0, _classCallCheck3.default)(this, Socket);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Socket.__proto__ || (0, _getPrototypeOf2.default)(Socket)).call(this));

    _this.url = 'https://' + hostname;
    _this.status = 'offline';
    _this.connect = function () {
      if (_this.status === 'online') return console.log('--> User already online');
      _this.socketio = (0, _socket2.default)(_this.url);

      _this.emit('init', _this.url);
      var socketId = void 0;
      _this.socketio.on('connect', function () {
        _this.status = 'online';
        _this.emit('connect');
        _this.socketio.on('authenticated', function (_socketId) {
          if (socketId) _this.socketio.removeAllListeners(socketId);
          _this.socketio.removeAllListeners('everybody');
          socketId = _socketId;
          _this.emit('authenticated', socketId);
          _this.socketio.on(socketId, function (event) {
            var action = _lodash2.default.get(event, 'action');
            var data = _lodash2.default.get(event, 'data');
            if (_lodash2.default.isString(event)) action = event;
            if (!_lodash2.default.isString(action)) throw new Error('Event has no action');
            _this.emit('exec', { action: action, data: data });
          });
        });
        var session = _this.session.get();
        var accessToken = _lodash2.default.get(session, 'token.accessToken');
        if (accessToken) _this.socketio.emit('authenticate', { accessToken: session.token.accessToken });
      });
      _this.socketio.on('disconnect', function () {
        _this.status = 'offline';
        _this.emit('disconnect');
      });
    };
    return _this;
  }

  return Socket;
}(_events2.default);