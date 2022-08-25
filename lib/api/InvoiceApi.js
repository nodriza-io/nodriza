'use strict';
/* eslint-disable no-unused-vars */

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Invoice = void 0;

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

var model = 'invoice';

var Invoice = /*#__PURE__*/function (_Request) {
  _inherits(Invoice, _Request);

  var _super = _createSuper(Invoice);

  function Invoice(params) {
    _classCallCheck(this, Invoice);

    params.model = model;
    return _super.call(this, params);
  }
  /**
  * PUT /v1/invoice/changeStatus [PRIVATE]
  *
  * Change invoice status
  *
  * @param  {Object} params
  * - @param  {String} id * -> (In Body)  e.g 5a4d4ac4aa10f903c9d2cf2f
  * - @param  {String} status * -> (In Body)  e.g approved
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */


  _createClass(Invoice, [{
    key: "changeStatus",
    value: function changeStatus(body, callback) {
      var params = {
        url: '/v1/invoice/changeStatus',
        body: body
      };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * POST /v1/invoice/generateCommissionPo [PRIVATE]
    *
    * Generate commission PO from invoice
    *
    * @param  {Object} params
    * - @param  {String} invoiceId * -> (In Body)  e.g 5a5e5c5c321c3f05a1b7fce5
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "generateCommissionPo",
    value: function generateCommissionPo(body, callback) {
      var params = {
        url: '/v1/invoice/generateCommissionPo',
        body: body
      };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/invoice/getNextNumber [PRIVATE]
    *
    * Return next invoice number
    *
    * @param  {Function} callback
    * @return {Code} 200, 400
    */

  }, {
    key: "getNextNumber",
    value: function getNextNumber(callback) {
      this.get('/v1/invoice/getNextNumber', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * POST /v1/invoice/notifyStatus [PRIVATE]
    *
    * Send payment reminder
    *
    * @param  {Object} params
    * - @param  {String} invoiceId * -> (In Body)  e.g 5a5e5c5c321c3f05a1b7fce5
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "notifyStatus",
    value: function notifyStatus(body, callback) {
      var params = {
        url: '/v1/invoice/notifyStatus',
        body: body
      };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/invoice/paymentAvailability [PUBLIC]
    *
    * Returns invoice payment availability
    *
    * @param  {Object} params
    * - @param  {String} invoiceId * -> (In query) Invoice ID
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "paymentAvailability",
    value: function paymentAvailability(params, callback) {
      var url = '/v1/invoice/paymentAvailability';
      if (!_lodash["default"].isEmpty(params)) url += '?' + _queryString["default"].stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * POST /v1/invoice/recordPayment [PRIVATE]
    *
    * Generate commission PO from invoice
    *
    * @param  {Object} params
    * - @param  {String} invoiceId * -> (In Body)  e.g 5a5e5c5c321c3f05a1b7fce5
    * - @param  {Float} partial  -> (In Body)  e.g 100.2
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "recordPayment",
    value: function recordPayment(body, callback) {
      var params = {
        url: '/v1/invoice/recordPayment',
        body: body
      };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * POST /v1/invoice/sendReminder [PRIVATE]
    *
    * Send payment reminder
    *
    * @param  {Object} params
    * - @param  {String} invoiceId * -> (In Body)  e.g 5a5e5c5c321c3f05a1b7fce5
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "sendReminder",
    value: function sendReminder(body, callback) {
      var params = {
        url: '/v1/invoice/sendReminder',
        body: body
      };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * PUT /v1/invoice/setCommission [PRIVATE]
    *
    * Invoice set commission data
    *
    * @param  {Object} params
    * - @param  {String} id * -> (In Body)  e.g 5a4d4ac4aa10f903c9d2cf2f
    * - @param  {String} commissionAgent * -> (In Body)  e.g 5a4d4ac4aa10f903c9d2cf2f
    * - @param  {Float} commissionPercent * -> (In Body)  e.g 12.4
    * - @param  {String} commissionPayDate * -> (In Body)  e.g 12/18/2019
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "setCommission",
    value: function setCommission(body, callback) {
      var params = {
        url: '/v1/invoice/setCommission',
        body: body
      };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * POST /v1/invoice/share [PRIVATE]
    *
    * Share invoice with any email
    *
    * @param  {Object} params
    * - @param  {String} id * -> (In Body)  e.g 5a55470ce6519c07837bfa12
    * - @param  {String} email * -> (In Body)  e.g john@acme.com
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "share",
    value: function share(body, callback) {
      var params = {
        url: '/v1/invoice/share',
        body: body
      };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * PUT /v1/invoice/starred [PRIVATE]
    *
    * Change starred status
    *
    * @param  {Object} params
    * - @param  {String} id * -> (In Body)  e.g 5a6a8feb3ac1f301fddd3950
    * - @param  {String} status * -> (In Body)  e.g true
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "starred",
    value: function starred(body, callback) {
      var params = {
        url: '/v1/invoice/starred',
        body: body
      };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);

  return Invoice;
}(_request.Request);

exports.Invoice = Invoice;