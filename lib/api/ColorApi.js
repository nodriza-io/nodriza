'use strict';
/* eslint-disable no-unused-vars */

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = void 0;

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

var model = 'color';

var Color = /*#__PURE__*/function (_Request) {
  _inherits(Color, _Request);

  var _super = _createSuper(Color);

  function Color(params) {
    _classCallCheck(this, Color);

    params.model = model;
    return _super.call(this, params);
  }
  /**
  * GET /v1/color/getColorsFromImage [PRIVATE]
  *
  * Return an array of color taken from an online image
  *
  * @param  {Object} params
  * - @param  {String} url  -> (In query) url of image to extract colors
  * - @param  {String} colorsNumber  -> (In query) The number of colors to generate
  * - @param  {String} sortBy  -> (In query) Sort colors by...
  * @param  {Function} callback
  * @return {Code} 200, 403
  */


  _createClass(Color, [{
    key: "getColorsFromImage",
    value: function getColorsFromImage(params, callback) {
      var url = '/v1/color/getColorsFromImage';
      if (!_lodash["default"].isEmpty(params)) url += '?' + _queryString["default"].stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/color/randomPalettes [PRIVATE]
    *
    * Return an array with ramdom color palettes in HEX format
    *
    * @param  {Object} params
    * - @param  {String} count  -> (In query) Number of color palettes to return
    * - @param  {String} swatchesNum  -> (In query) Number of swatches that palette should have (4 or 5 as option)
    * @param  {Function} callback
    * @return {Code} 200, 400
    */

  }, {
    key: "randomPalettes",
    value: function randomPalettes(params, callback) {
      var url = '/v1/color/randomPalettes';
      if (!_lodash["default"].isEmpty(params)) url += '?' + _queryString["default"].stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/color/topPalettes [PRIVATE]
    *
    * Return an array with the best color palettes in HEX format
    *
    * @param  {Object} params
    * - @param  {String} count  -> (In query) Number of color palettes to return
    * @param  {Function} callback
    * @return {Code} 200, 400
    */

  }, {
    key: "topPalettes",
    value: function topPalettes(params, callback) {
      var url = '/v1/color/topPalettes';
      if (!_lodash["default"].isEmpty(params)) url += '?' + _queryString["default"].stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);

  return Color;
}(_request.Request);

exports.Color = Color;