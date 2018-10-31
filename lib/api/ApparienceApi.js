'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Apparience = undefined;

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

var model = 'apparience';

var Apparience = exports.Apparience = function (_Request) {
  _inherits(Apparience, _Request);

  function Apparience(params) {
    _classCallCheck(this, Apparience);

    params.model = model;
    return _possibleConstructorReturn(this, (Apparience.__proto__ || Object.getPrototypeOf(Apparience)).call(this, params));
  }

  _createClass(Apparience, [{
    key: 'generateWallpaper',
    value: function generateWallpaper(body, callback) {
      var params = { url: '/v1/apparience/generateWallpaper', body: body };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'getColorsFromImage',
    value: function getColorsFromImage(params, callback) {
      var url = '/v1/apparience/getColorsFromImage';
      if (!_lodash2.default.isEmpty(params)) url += '?' + _queryString2.default.stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'randomPalettes',
    value: function randomPalettes(params, callback) {
      var url = '/v1/apparience/randomPalettes';
      if (!_lodash2.default.isEmpty(params)) url += '?' + _queryString2.default.stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'topPalettes',
    value: function topPalettes(params, callback) {
      var url = '/v1/apparience/topPalettes';
      if (!_lodash2.default.isEmpty(params)) url += '?' + _queryString2.default.stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'uploadLogo',
    value: function uploadLogo(body, callback) {
      var params = { url: '/v1/apparience/uploadLogo', body: body };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'uploadWallpaper',
    value: function uploadWallpaper(body, callback) {
      var params = { url: '/v1/apparience/uploadWallpaper', body: body };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);

  return Apparience;
}(_request.Request);