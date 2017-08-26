'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Role = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

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

var model = 'role';

var Role = exports.Role = function (_Request) {
  (0, _inherits3.default)(Role, _Request);

  function Role(params) {
    (0, _classCallCheck3.default)(this, Role);

    params.model = model;
    return (0, _possibleConstructorReturn3.default)(this, (Role.__proto__ || (0, _getPrototypeOf2.default)(Role)).call(this, params));
  }

  (0, _createClass3.default)(Role, [{
    key: 'addPermissions',
    value: function addPermissions(body, callback) {
      var params = { url: '/v1/role/addPermissions', body: body };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'getPermissions',
    value: function getPermissions(params, callback) {
      this.get('/v1/role/getPermissions/' + params['roleKeyname'], function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'removeAllPermissions',
    value: function removeAllPermissions(body, callback) {
      var params = { url: '/v1/role/removeAllPermissions', body: body };
      this.delete(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'removePermissions',
    value: function removePermissions(body, callback) {
      var params = { url: '/v1/role/removePermissions', body: body };
      this.delete(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);
  return Role;
}(_request.Request);