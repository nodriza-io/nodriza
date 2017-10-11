'use strict';
/* eslint-disable no-unused-vars */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

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

var model = 'app';

var App = exports.App = function (_Request) {
  _inherits(App, _Request);

  function App(params) {
    _classCallCheck(this, App);

    params.model = model;
    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, params));
  }
  /**
  * PUT /v1/app/activate [PRIVATE]
  *
  * Set app active or inactive
  *
  * @param  {Object} params
  * - @param  {String} appId * -> (In Body)  e.g 594d4b5970abb08100bf5b71
  * - @param  {String} clientId  -> (In Body)  e.g 467332518934-hf4q0d8q8qb5hvcs3f4d4hfpetrbpi9s.apps.Googleusercontent.com
  * - @param  {String} clientSecret  -> (In Body)  e.g AqbCusgZgrMQspMQS3FWl7ue
  * - @param  {String} active * -> (In Body)  e.g true
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */


  _createClass(App, [{
    key: 'activate',
    value: function activate(body, callback) {
      var params = { url: '/v1/app/activate', body: body };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/app/getOauthUrl [PUBLIC]
    *
    * Return OAuth2 URL of requested provider
    *
    * @param  {Object} params
    * - @param  {String} keyname * -> (In query) OAuth 2 provider keyname e.g google
    * - @param  {String} successUrl * -> (In query) The URL where client should be redirected after successful login
    * - @param  {String} login  -> (In query) True if OAuth authentication implicate create user or generate session
    * @param  {Function} callback
    * @return {Code} 200, 403
    */

  }, {
    key: 'getOauthUrl',
    value: function getOauthUrl(params, callback) {
      var url = '/v1/app/getOauthUrl';
      if (!_lodash2.default.isEmpty(params)) url += '?' + _queryString2.default.stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/app/list [PRIVATE]
    *
    * Get platform apps
    *
    * @param  {Function} callback
    * @return {Code} 200, 401
    */

  }, {
    key: 'list',
    value: function list(callback) {
      this.get('/v1/app/list', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * DELETE /v1/app/revoke [PRIVATE]
    *
    * Revoke app authorization
    *
    * @param  {Object} params
    * - @param  {String} keyname * -> (In Body)  e.g google
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: 'revoke',
    value: function revoke(body, callback) {
      var params = { url: '/v1/app/revoke', body: body };
      this.delete(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * PUT /v1/app/setAccessToken [PRIVATE]
    *
    * Set or update app access token
    *
    * @param  {Object} params
    * - @param  {String} keyname * -> (In Body)  e.g google
    * - @param  {String} accessToken * -> (In Body)  e.g xxx-xxx-xxx-xxxx
    * @param  {Function} callback
    * @return {Code} 200, 400, 404, 500
    */

  }, {
    key: 'setAccessToken',
    value: function setAccessToken(body, callback) {
      var params = { url: '/v1/app/setAccessToken', body: body };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);

  return App;
}(_request.Request);