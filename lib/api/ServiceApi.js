'use strict';
/* eslint-disable no-unused-vars */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Service = undefined;

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

var model = 'service';

var Service = exports.Service = function (_Request) {
  _inherits(Service, _Request);

  function Service(params) {
    _classCallCheck(this, Service);

    params.model = model;
    return _possibleConstructorReturn(this, (Service.__proto__ || Object.getPrototypeOf(Service)).call(this, params));
  }
  /**
  * GET /v1/service/elasticSearch [PRIVATE]
  *
  * Ami search
  *
  * @param  {Object} params
  * - @param  {String} db * -> (In query) Database search
  * - @param  {String} collection * -> (In query) Collection search
  * - @param  {String} criterial * -> (In query) Criterial search
  * @param  {Function} callback
  * @return {Code} 200, 403
  */


  _createClass(Service, [{
    key: 'elasticSearch',
    value: function elasticSearch(params, callback) {
      var url = '/v1/service/elasticSearch';
      if (!_lodash2.default.isEmpty(params)) url += '?' + _queryString2.default.stringify(params);
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
    key: 'genRandomDoc',
    value: function genRandomDoc(body, callback) {
      var params = { url: '/v1/service/genRandomDoc', body: body };
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
    key: 'generateAvatar',
    value: function generateAvatar(params, callback) {
      var url = '/v1/service/generateAvatar';
      if (!_lodash2.default.isEmpty(params)) url += '?' + _queryString2.default.stringify(params);
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
    key: 'getRouteControllers',
    value: function getRouteControllers(callback) {
      this.get('/v1/service/getRouteControllers', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);

  return Service;
}(_request.Request);