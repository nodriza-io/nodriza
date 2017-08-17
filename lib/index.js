'use strict';

var _api = require('./api');

var _session = require('./session');

var _storage = require('./storage');

var _utils = require('./utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nodriza = function (_Api) {
  _inherits(Nodriza, _Api);

  function Nodriza(params) {
    _classCallCheck(this, Nodriza);

    var _this = _possibleConstructorReturn(this, (Nodriza.__proto__ || Object.getPrototypeOf(Nodriza)).call(this, params));

    if (!params || !params.hostname) throw new Error('Please define hostname -> e.g acme.nodriza.io');
    _this.hostname = params.hostname;
    _this.session = new _session.Session();
    _this.storage = new _storage.Storage();
    _this.u = new _utils.Utils();
    return _this;
  }

  return Nodriza;
}(_api.Api);

module.exports = Nodriza;