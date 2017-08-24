'use strict';
/* eslint-disable no-unused-vars */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Role = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('../request');

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var model = 'role';

var Role = exports.Role = function (_Request) {
  _inherits(Role, _Request);

  function Role(params) {
    _classCallCheck(this, Role);

    params.model = model;
    return _possibleConstructorReturn(this, (Role.__proto__ || Object.getPrototypeOf(Role)).call(this, params));
  }
  /**
  * PUT /v1/role/addPermissions [PRIVATE]
  *
  * Add one or more role permissions
  *
  * @param  {Object} params
  * - @param  {String} roleKeyname * -> (In Body)  e.g support
  * - @param  {Array} permissionKeynames * -> (In Body)  e.g region,department_create,department_update_name
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */


  _createClass(Role, [{
    key: 'addPermissions',
    value: function addPermissions(body, callback) {
      var params = { url: '/v1/role/addPermissions', body: body };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/role/getPermissions/{roleKeyname} [PRIVATE]
    *
    * Return an array with role permissions
    *
    * @param  {Object} params
    * - @param  {String} roleKeyname * -> (In path) e.g support
    * @param  {Function} callback
    * @return {Code} 200, 400
    */

  }, {
    key: 'getPermissions',
    value: function getPermissions(params, callback) {
      this.get('/v1/role/getPermissions/' + params['roleKeyname'], function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * DELETE /v1/role/removeAllPermissions [PRIVATE]
    *
    * Remove all assigned role permissions
    *
    * @param  {Object} params
    * - @param  {String} roleKeyname * -> (In Body)  e.g client
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: 'removeAllPermissions',
    value: function removeAllPermissions(body, callback) {
      var params = { url: '/v1/role/removeAllPermissions', body: body };
      this.delete(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * DELETE /v1/role/removePermissions [PRIVATE]
    *
    * Remove one or more role permissions
    *
    * @param  {Object} params
    * - @param  {String} roleKeyname * -> (In Body)  e.g support
    * - @param  {Array} permissionKeynames * -> (In Body)  e.g region,department_create,department_update_name
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

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