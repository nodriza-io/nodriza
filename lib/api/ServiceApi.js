'use strict';
/* eslint-disable no-unused-vars */

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Service = void 0;

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

var model = 'service';

var Service = /*#__PURE__*/function (_Request) {
  _inherits(Service, _Request);

  var _super = _createSuper(Service);

  function Service(params) {
    _classCallCheck(this, Service);

    params.model = model;
    return _super.call(this, params);
  }
  /**
  * GET /v1/service/base64Image [PRIVATE]
  *
  * Return SVG Qr Code
  *
  * @param  {Object} params
  * - @param  {String} url  -> (In query) Url to convert to base64
  * @param  {Function} callback
  * @return {Code} 200, 403
  */


  _createClass(Service, [{
    key: "base64Image",
    value: function base64Image(params, callback) {
      var url = '/v1/service/base64Image';
      if (!_lodash["default"].isEmpty(params)) url += '?' + _queryString["default"].stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/service/export [PRIVATE]
    *
    * Export collection
    *
    * @param  {Object} params
    * - @param  {String} collection * -> (In query) Collection to export
    * - @param  {String} ext * -> (In query) Export format csv or json
    * @param  {Function} callback
    * @return {Code} 200, 403
    */

  }, {
    key: "export",
    value: function _export(params, callback) {
      var url = '/v1/service/export';
      if (!_lodash["default"].isEmpty(params)) url += '?' + _queryString["default"].stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * POST /v1/service/genRandomDoc [PRIVATE]
    *
    * Generate a document with random data for testing proposes
    *
    * @param  {Object} params
    * - @param  {String} collection * -> (In Body)  e.g company
    * - @param  {String} overwrite  -> (In Body)  e.g [object Object]
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "genRandomDoc",
    value: function genRandomDoc(body, callback) {
      var params = {
        url: '/v1/service/genRandomDoc',
        body: body
      };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/service/generateAvatar [PRIVATE]
    *
    * Return an array with route controllers
    *
    * @param  {Object} params
    * - @param  {String} width  -> (In query) Avatar size, eg. 200
    * - @param  {String} color  -> (In query) Avatar color, if not set will take randomly one of host company color e.g FF0000 (Do not add #)
    * - @param  {String} text * -> (In query) Avatar initials text, send full name if needed e.g Jhon Doe
    * @param  {Function} callback
    * @return {Code} 200, 403
    */

  }, {
    key: "generateAvatar",
    value: function generateAvatar(params, callback) {
      var url = '/v1/service/generateAvatar';
      if (!_lodash["default"].isEmpty(params)) url += '?' + _queryString["default"].stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/service/getRouteControllers [PRIVATE]
    *
    * Return an array with route controllers
    *
    * @param  {Function} callback
    * @return {Code} 200, 403
    */

  }, {
    key: "getRouteControllers",
    value: function getRouteControllers(callback) {
      this.get('/v1/service/getRouteControllers', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * POST /v1/service/getTrialExpiration [PUBLIC]
    *
    * Get trial information
    *
    * @param  {Object} params
    * - @param  {String} firstName  -> (In Body)  e.g staging
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "getTrialExpiration",
    value: function getTrialExpiration(body, callback) {
      var params = {
        url: '/v1/service/getTrialExpiration',
        body: body
      };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/service/iconSearch [PRIVATE]
    *
    * Return search results
    *
    * @param  {Object} params
    * - @param  {String} keyword  -> (In query) keyword
    * @param  {Function} callback
    * @return {Code} 200, 403
    */

  }, {
    key: "iconSearch",
    value: function iconSearch(params, callback) {
      var url = '/v1/service/iconSearch';
      if (!_lodash["default"].isEmpty(params)) url += '?' + _queryString["default"].stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * POST /v1/service/import [PRIVATE]
    *
    * Generate a document with random data for testing proposes
    *
    * @param  {Object} params
    * - @param   Body * -> (In body) Body params in JSON format
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "import",
    value: function _import(body, callback) {
      var params = {
        url: '/v1/service/import',
        body: body
      };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/service/pdf [PUBLIC]
    *
    * Return URL converted into PDF
    *
    * @param  {Object} params
    * - @param  {String} token  -> (In query) Access Token
    * - @param  {String} url  -> (In query) Url to capture
    * - @param  {String} delay  -> (In query) Url to capture
    * @param  {Function} callback
    * @return {Code} 200, 403
    */

  }, {
    key: "pdf",
    value: function pdf(params, callback) {
      var url = '/v1/service/pdf';
      if (!_lodash["default"].isEmpty(params)) url += '?' + _queryString["default"].stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * POST /v1/service/pdfPreview [PUBLIC]
    *
    * Return HTML converted into PDF
    *
    * @param  {Object} params
    * - @param  {String} token  -> (In query) Access Token
    * - @param  {String} html  -> (In query) Url to capture
    * - @param  {String} delay  -> (In query) Url to capture
    * @param  {Function} callback
    * @return {Code} 200, 403
    */

  }, {
    key: "pdfPreview",
    value: function pdfPreview(body, callback) {
      var params = {
        url: '/v1/service/pdfPreview',
        body: body
      };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/service/qr [PUBLIC]
    *
    * Return SVG Qr Code
    *
    * @param  {Object} params
    * - @param  {String} url  -> (In query) Url string
    * @param  {Function} callback
    * @return {Code} 200, 403
    */

  }, {
    key: "qr",
    value: function qr(params, callback) {
      var url = '/v1/service/qr';
      if (!_lodash["default"].isEmpty(params)) url += '?' + _queryString["default"].stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/service/systemAvailability [PUBLIC]
    *
    * Validate if system is ready
    *
    * @param  {Function} callback
    * @return {Code} 200, 403
    */

  }, {
    key: "systemAvailability",
    value: function systemAvailability(callback) {
      this.get('/v1/service/systemAvailability', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/service/version [PUBLIC]
    *
    * Get app version
    *
    * @param  {Function} callback
    * @return {Code} 200, 403
    */

  }, {
    key: "version",
    value: function version(callback) {
      this.get('/v1/service/version', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * POST /v1/service/webhook [PUBLIC]
    *
    * Receive webhooks
    *
    * @param  {Object} params
    * - @param   Body * -> (In body) Body params in JSON format
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "webhook",
    value:
    /**
    * GET /v1/service/webhook [PUBLIC]
    *
    * Receive webhooks
    *
    * @param  {Object} params
    * - @param   Body * -> (In body) Body params in JSON format
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */
    function webhook(body, callback) {
      var params = {
        url: '/v1/service/webhook',
        body: body
      };
      this.get(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);

  return Service;
}(_request.Request);

exports.Service = Service;