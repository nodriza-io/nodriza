'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Api = undefined;

var _ColorApi = require('./api/ColorApi');

var _ConfigApi = require('./api/ConfigApi');

var _UserApi = require('./api/UserApi');

var _CompanyApi = require('./api/CompanyApi');

var _socket = require('./socket');

var _localStorage = require('./localStorage');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Api = exports.Api = function (_Socket) {
  _inherits(Api, _Socket);

  function Api(params) {
    _classCallCheck(this, Api);

    var hostname = params.hostname;
    // Check if running in node mode
    if (typeof window === 'undefined') {
      global.localStorage = new _localStorage.LocalStorage();
    } else {
      if (params.accessToken) throw new Error('For security resons accessToken can only be used in node mode');
    }

    var _this = _possibleConstructorReturn(this, (Api.__proto__ || Object.getPrototypeOf(Api)).call(this, hostname));

    _this.api = {
      color: new _ColorApi.Color(params),
      config: new _ConfigApi.Config(params),
      user: new _UserApi.User(params),
      company: new _CompanyApi.Company(params)
    };
    return _this;
  }

  return Api;
}(_socket.Socket);