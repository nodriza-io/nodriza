'use strict';
/* eslint-disable no-unused-vars */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Config = undefined;

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

var model = 'config';

var Config = exports.Config = function (_Request) {
  _inherits(Config, _Request);

  function Config(params) {
    _classCallCheck(this, Config);

    params.model = model;
    return _possibleConstructorReturn(this, (Config.__proto__ || Object.getPrototypeOf(Config)).call(this, params));
  }
  /**
  * GET /v1/config/getFactorySettings/{group} [PRIVATE]
  *
  * Returns a group of configs with factory settings
  *
  * @param  {Object} params
  * - @param  {String} group * -> (In path) Group name
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */


  _createClass(Config, [{
    key: 'getFactorySettings',
    value: function getFactorySettings(params, callback) {
      this.get('/v1/config/getFactorySettings/' + params['group'], function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/config/getGroup/{group} [PRIVATE]
    *
    * Returns a group of configs by name
    *
    * @param  {Object} params
    * - @param  {String} group * -> (In path) Group name
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: 'getGroup',
    value: function getGroup(params, callback) {
      this.get('/v1/config/getGroup/' + params['group'], function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/config/public [PUBLIC]
    *
    * Return public configuration
    *
    * @param  {Function} callback
    * @return {Code} 200, 400
    */

  }, {
    key: 'public',
    value: function _public(callback) {
      this.get('/v1/config/public', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * PUT /v1/config/updateGroup [PRIVATE]
    *
    * Update a config group
    *
    * @param  {Object} params
    * - @param  {String} group * -> (In Body)  e.g css
    * - @param  {Object} data * -> (In Body)  e.g [object Object]
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: 'updateGroup',
    value: function updateGroup(body, callback) {
      var params = { url: '/v1/config/updateGroup', body: body };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);

  return Config;
}(_request.Request);