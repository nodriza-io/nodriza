'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Api = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _ApparienceApi = require('./api/ApparienceApi');

var _ConfigApi = require('./api/ConfigApi');

var _UserApi = require('./api/UserApi');

var _CompanyApi = require('./api/CompanyApi');

var _AppApi = require('./api/AppApi');

var _socket = require('./socket');

var _localStorage = require('./localStorage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Api = exports.Api = function (_Socket) {
  (0, _inherits3.default)(Api, _Socket);

  function Api(params) {
    (0, _classCallCheck3.default)(this, Api);

    var hostname = params.hostname;
    if (typeof window === 'undefined') {
      global.localStorage = new _localStorage.LocalStorage();
    } else {
      if (params.accessToken) throw new Error('For security resons accessToken can only be used in node mode');
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (Api.__proto__ || (0, _getPrototypeOf2.default)(Api)).call(this, hostname));

    _this.api = {
      apparience: new _ApparienceApi.Apparience(params),
      config: new _ConfigApi.Config(params),
      app: new _AppApi.App(params),
      user: new _UserApi.User(params),
      company: new _CompanyApi.Company(params)
    };
    return _this;
  }

  return Api;
}(_socket.Socket);