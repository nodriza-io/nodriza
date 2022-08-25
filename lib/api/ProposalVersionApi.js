'use strict';
/* eslint-disable no-unused-vars */

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProposalVersion = void 0;

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

var model = 'proposalVersion';

var ProposalVersion = /*#__PURE__*/function (_Request) {
  _inherits(ProposalVersion, _Request);

  var _super = _createSuper(ProposalVersion);

  function ProposalVersion(params) {
    _classCallCheck(this, ProposalVersion);

    params.model = model;
    return _super.call(this, params);
  }
  /**
  * PUT /v1/proposalVersion/rename [PRIVATE]
  *
  * Rename proposal version
  *
  * @param  {Object} params
  * - @param  {String} proposalId * -> (In Body)  e.g 5a6a8feb3ac1f301fddd3950
  * - @param  {String} versionName * -> (In Body)  e.g true
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */


  _createClass(ProposalVersion, [{
    key: "rename",
    value: function rename(body, callback) {
      var params = {
        url: '/v1/proposalVersion/rename',
        body: body
      };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * PUT /v1/proposalVersion/restore [PRIVATE]
    *
    * Rename proposal version
    *
    * @param  {Object} params
    * - @param  {String} proposalId * -> (In Body)  e.g 5a6a8feb3ac1f301fddd3950
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "restore",
    value: function restore(body, callback) {
      var params = {
        url: '/v1/proposalVersion/restore',
        body: body
      };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * PUT /v1/proposalVersion/shareVersion [PRIVATE]
    *
    * Share proposal version with client
    *
    * @param  {Object} params
    * - @param  {String} proposalVersionId * -> (In Body)  e.g 5a6a8feb3ac1f301fddd3950
    * - @param  {Boolean} shared * -> (In Body)  e.g true
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "shareVersion",
    value: function shareVersion(body, callback) {
      var params = {
        url: '/v1/proposalVersion/shareVersion',
        body: body
      };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);

  return ProposalVersion;
}(_request.Request);

exports.ProposalVersion = ProposalVersion;