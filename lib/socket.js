'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Socket = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
    return _this;
  }

  _createClass(Socket, [{
    key: 'connect',
    value: function connect() {
      var _this2 = this;

      if (this.status === 'online') return console.log('--> User already online');
      this.socketio = (0, _socket2.default)(this.url);
      // console.log('--> Socket connect init...')
      this.emit('init', this.url);
      var socketId = void 0;
      this.socketio.on('connect', function () {
        _this2.status = 'online';
        _this2.emit('connect');
        _this2.socketio.on('authenticated', function (_socketId) {
          if (socketId) _this2.socketio.removeAllListeners(socketId); // <-- Avoid fire multiple events
          _this2.socketio.removeAllListeners('everybody'); // <-- Avoid fire multiple events
          socketId = _socketId;
          _this2.emit('authenticated', socketId);
          _this2.socketio.on(socketId, function (event) {
            var action = _lodash2.default.get(event, 'action');
            var data = _lodash2.default.get(event, 'data');
            if (_lodash2.default.isString(event)) action = event;
            if (!_lodash2.default.isString(action)) throw new Error('Event has no action');
            _this2.emit('exec', { action: action, data: data });
          });
        });
        var session = _this2.session.get();
        var accessToken = _lodash2.default.get(session, 'token.accessToken');
        if (accessToken) _this2.socketio.emit('authenticate', { accessToken: session.token.accessToken });
      });
      this.socketio.on('disconnect', function () {
        _this2.status = 'offline';
        _this2.emit('disconnect');
      });

      // this.socketio.on('disconnectMessage', (msg) => {
      //   this.emit('info', 'Disconnected: ' + msg)
      // })
    }
  }]);

  return Socket;
}(_events2.default);