'use strict';
/* eslint-disable no-unused-vars */

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Payu = void 0;

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

var model = 'payu';

var Payu = /*#__PURE__*/function (_Request) {
  _inherits(Payu, _Request);

  var _super = _createSuper(Payu);

  function Payu(params) {
    _classCallCheck(this, Payu);

    params.model = model;
    return _super.call(this, params);
  }
  /**
  * GET /v1/payu/checkout [PUBLIC]
  *
  * PayU payment checkout
  *
  * @param  {Object} params
  * - @param  {String} invoiceId * -> (In query) e.g 5a6cf3b33e8f4600fd6cf211
  * - @param  {String} buyerFullName  -> (In query) e.g Jonh Doe
  * - @param  {String} buyerEmail  -> (In query) e.g jdoe@acme.com
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */


  _createClass(Payu, [{
    key: "checkout",
    value: function checkout(params, callback) {
      var url = '/v1/payu/checkout';
      if (!_lodash["default"].isEmpty(params)) url += '?' + _queryString["default"].stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * POST /v1/payu/confirm [PUBLIC]
    *
    * Successful payment
    *
    * @param  {Object} params
    * - @param  {String} description  -> (In Body)  e.g jdoe@acme.com
    * - @param  {String} email_buyer  -> (In Body)  e.g jdoe@acme.com
    * - @param  {String} transaction_id * -> (In Body)  e.g 4a5320dc-15ba-43c0-b204-73b67caae120
    * - @param  {String} payment_method_name  -> (In Body)  e.g VISA
    * - @param  {String} commision_pol  -> (In Body)  e.g 13530.30
    * - @param  {String} extra1  -> (In Body)  e.g 5a723600947678012c2de6b3
    * - @param  {String} extra2  -> (In Body)  e.g 5a723600947678012c2de6b3
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "confirm",
    value: function confirm(body, callback) {
      var params = {
        url: '/v1/payu/confirm',
        body: body
      };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/payu/response/{invoiceId} [PUBLIC]
    *
    * Redirect to a Payment receipt
    *
    * @param  {Object} params
    * - @param  {String} invoiceId * -> (In path) Invoice ID
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "response",
    value: function response(params, callback) {
      this.get('/v1/payu/response/' + params['invoiceId'], function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/payu/signature [PUBLIC]
    *
    * Redirect to a Payment receipt
    *
    * @param  {Object} params
    * - @param  {String} merchantId * -> (In query) Merchant ID
    * - @param  {String} referenceCode * -> (In query) Reference Code, no especial charters
    * - @param  {String} amount * -> (In query) Payment Amount
    * - @param  {String} currency * -> (In query) Payment Currency
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "signature",
    value: function signature(params, callback) {
      var url = '/v1/payu/signature';
      if (!_lodash["default"].isEmpty(params)) url += '?' + _queryString["default"].stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);

  return Payu;
}(_request.Request);

exports.Payu = Payu;