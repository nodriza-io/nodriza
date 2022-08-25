'use strict';
/* eslint-disable no-unused-vars */

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _request = require("../request");

var _queryString = _interopRequireDefault(require("query-string"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var model = 'app';

var App = /*#__PURE__*/function (_Request) {
  _inherits(App, _Request);

  var _super = _createSuper(App);

  function App(params) {
    _classCallCheck(this, App);

    params.model = model;
    return _super.call(this, params);
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


  _createClass(App, [{
    key: "getOauthUrl",
    value: function getOauthUrl(params, callback) {
      var url = '/v1/app/getOauthUrl';
      if (!_lodash["default"].isEmpty(params)) url += '?' + _queryString["default"].stringify(params);
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
    key: "list",
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
    key: "revoke",
    value: function revoke(body, callback) {
      var params = {
        url: '/v1/app/revoke',
        body: body
      };
      this["delete"](params, function (err, data) {
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
    key: "setAccessToken",
    value: function setAccessToken(body, callback) {
      var params = {
        url: '/v1/app/setAccessToken',
        body: body
      };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);

  return App;
}(_request.Request);

exports.App = App;