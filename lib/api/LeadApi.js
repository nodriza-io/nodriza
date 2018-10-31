'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lead = undefined;

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

var model = 'lead';

var Lead = exports.Lead = function (_Request) {
  _inherits(Lead, _Request);

  function Lead(params) {
    _classCallCheck(this, Lead);

    params.model = model;
    return _possibleConstructorReturn(this, (Lead.__proto__ || Object.getPrototypeOf(Lead)).call(this, params));
  }

  _createClass(Lead, [{
    key: 'changeStatus',
    value: function changeStatus(body, callback) {
      var params = { url: '/v1/lead/changeStatus', body: body };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'starred',
    value: function starred(body, callback) {
      var params = { url: '/v1/lead/starred', body: body };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);

  return Lead;
}(_request.Request);