'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateGallery = undefined;

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

var model = 'templateGallery';

var TemplateGallery = exports.TemplateGallery = function (_Request) {
  _inherits(TemplateGallery, _Request);

  function TemplateGallery(params) {
    _classCallCheck(this, TemplateGallery);

    params.model = model;
    return _possibleConstructorReturn(this, (TemplateGallery.__proto__ || Object.getPrototypeOf(TemplateGallery)).call(this, params));
  }

  _createClass(TemplateGallery, [{
    key: 'import',
    value: function _import(body, callback) {
      var params = { url: '/v1/templateGallery/import', body: body };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'view',
    value: function view(params, callback) {
      this.get('/v1/templateGallery/view/{keyname}/' + params['ext'], function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);

  return TemplateGallery;
}(_request.Request);