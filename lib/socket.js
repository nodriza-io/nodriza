'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Socket = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _socket = _interopRequireDefault(require("socket.io-client"));

var _events = _interopRequireDefault(require("events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Socket = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Socket, _EventEmitter);

  var _super = _createSuper(Socket);

  function Socket(hostname) {
    var _this;

    _classCallCheck(this, Socket);

    _this = _super.call(this);
    _this.url = 'https://' + hostname;
    if (!window) var window = {};
    window.status = 'offline';

    _this.connect = function () {
      if (window.status === 'online') return console.log('--> User already online');
      _this.socketio = (0, _socket["default"])(_this.url);
      window.socketio = _this.socketio; // console.log('--> Socket connect init...')

      _this.emit('init', _this.url);

      var socketId;

      _this.socketio.on('connect', function () {
        window.status = 'online';

        _this.emit('connect');

        _this.socketio.on('authenticated', function (_socketId) {
          if (socketId) _this.socketio.removeAllListeners(socketId); // <-- Avoid fire multiple events

          _this.socketio.removeAllListeners('everybody'); // <-- Avoid fire multiple events


          socketId = _socketId;

          _this.emit('authenticated', socketId);

          _this.socketio.on(socketId, function (event) {
            var action = _lodash["default"].get(event, 'action');

            var data = _lodash["default"].get(event, 'data');

            if (_lodash["default"].isString(event)) action = event;
            if (!_lodash["default"].isString(action)) throw new Error('Event has no action');

            _this.emit('exec', {
              action: action,
              data: data
            });
          });
        });

        var session = _this.session.get();

        var accessToken = _lodash["default"].get(session, 'token.accessToken');

        if (accessToken) _this.socketio.emit('authenticate', {
          accessToken: session.token.accessToken
        });
      });

      _this.socketio.on('disconnect', function () {
        window.status = 'offline';

        _this.emit('disconnect');

        console.log('--> disconnect!');
      });
    };

    return _this;
  }

  return _createClass(Socket);
}(_events["default"]);

exports.Socket = Socket;