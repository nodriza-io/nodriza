'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Socket = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Socket = exports.Socket = function (_EventEmitter) {
  _inherits(Socket, _EventEmitter);

  function Socket(hostname) {
    _classCallCheck(this, Socket);

    var _this = _possibleConstructorReturn(this, (Socket.__proto__ || Object.getPrototypeOf(Socket)).call(this));

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