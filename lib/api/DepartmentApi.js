'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Department = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _request = require('../request');

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = 'department';

var Department = exports.Department = function (_Request) {
  (0, _inherits3.default)(Department, _Request);

  function Department(params) {
    (0, _classCallCheck3.default)(this, Department);

    params.model = model;
    return (0, _possibleConstructorReturn3.default)(this, (Department.__proto__ || (0, _getPrototypeOf2.default)(Department)).call(this, params));
  }

  return Department;
}(_request.Request);