'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AwsBillingRecord = undefined;

var _request = require('../request');

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var model = 'awsBillingRecord';

var AwsBillingRecord = exports.AwsBillingRecord = function (_Request) {
  _inherits(AwsBillingRecord, _Request);

  function AwsBillingRecord(params) {
    _classCallCheck(this, AwsBillingRecord);

    params.model = model;
    return _possibleConstructorReturn(this, (AwsBillingRecord.__proto__ || Object.getPrototypeOf(AwsBillingRecord)).call(this, params));
  }

  return AwsBillingRecord;
}(_request.Request);