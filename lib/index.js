'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _api = require('./api');

var _session = require('./session');

var _storage = require('./storage');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nodriza = function (_Api) {
  (0, _inherits3.default)(Nodriza, _Api);

  function Nodriza(params) {
    (0, _classCallCheck3.default)(this, Nodriza);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Nodriza.__proto__ || (0, _getPrototypeOf2.default)(Nodriza)).call(this, params));

    if (!params || !params.hostname) throw new Error('Please define hostname -> e.g acme.nodriza.io');
    _this.hostname = params.hostname;
    _this.session = new _session.Session();
    _this.storage = new _storage.Storage();
    _this.u = new _utils.Utils();
    console.log('+++u:', _this.u);
    return _this;
  }

  return Nodriza;
}(_api.Api);

exports.default = Nodriza;