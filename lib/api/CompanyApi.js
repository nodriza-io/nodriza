'use strict';
/* eslint-disable no-unused-vars */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Company = undefined;

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

var model = 'company';

var Company = exports.Company = function (_Request) {
  _inherits(Company, _Request);

  function Company(params) {
    _classCallCheck(this, Company);

    params.model = model;
    return _possibleConstructorReturn(this, (Company.__proto__ || Object.getPrototypeOf(Company)).call(this, params));
  }

  /**
  * GET /v1/company/industry [PRIVATE]
  *
  * Return an array of company industry types
  *
  * @param  {Function} callback
  * @return {Code} 200, 401
  */


  _createClass(Company, [{
    key: 'industry',
    value: function industry(callback) {
      this.get('/v1/company/industry', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }

    /**
    * GET /v1/company/size [PRIVATE]
    *
    * Return an array of company sizes
    *
    * @param  {Function} callback
    * @return {Code} 200, 401
    */

  }, {
    key: 'size',
    value: function size(callback) {
      this.get('/v1/company/size', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }

    /**
    * POST /v1/company/uploadLogo [PRIVATE]
    *
    * Upload company photo
    *
    * @param  {Object} params
    * - @param  {String} companyId * -> (In Body)  e.g 59418bcd105605cc2693a981
    * - @param  {String} base64 * -> (In Body)  e.g data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAEAIAAACDgONyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0T///////8JWPfcAAAAB3RJTUUH4QcMECsiVgwe0gAABSZJREFUeNrt2j+Il3UAx/GvdUG1NBRS27m1uDjUHA2RHXSLkC0NUoctckJIgs0tRuIkFdHQn+2WloowwqUGEfXgAvFEDrvqFIRLLJdGF4eIo+e49+u1/+DzwMPvzfPlu2tubmlpfn4AEPPQ1AMAmIYAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQNTM1APYGk9999jFJ/d/evel9z5+c+otjDHG8YVzKycOX7qxsXJ5feot9/239+TI7NnzRw9d3Xv7+uqtqZ+AreQLACBKAACiBAAgSgAAogQAIEoAAKJcA0374umVN76a/f3KnZN/HJh6y06zdmFzYW1x7B6L49jUW+DBBCDtp0d/PfLzi1cP3j63emXqLTuOv362PUdAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUTNTD2BKz9995tRz3+/58omTew5MvWX7Wn/8ziu/nV5+dePd5Zen3gJbSQDSXl9/9rPXrk29Yrv7YXVt9sdflsfGWJ56CmwpR0AAUQIAECUAAFECABAlAABRAgAQ5Rpo2pHZs+ePHrq69/b11VtTb9nWDo6Hp54AW88XAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAEDUzNQDmNKpay/s++CTMca+qZfsPMcXzq2cOHzpxsbK5fWpt8CD+QIAiBIAgCgBAIgSAIAoAQCIEgCAKNdAd4jNR+59vrn/w83zb59+Z+otjDHG2oXNhbXFsXssjmNTb7lv89t7d/78+8zhi19/9M2//9XNv+6eufnWGOPQeH/qJ2Ar7ZqbW1qan596BgD/N0dAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUf8APZl9wJ7XJfQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDctMTJUMTY6NDM6MzQrMDA6MDBJXNE+AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA3LTEyVDE2OjQzOjM0KzAwOjAwOAFpggAAAABJRU5ErkJggg==
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: 'uploadLogo',
    value: function uploadLogo(body, callback) {
      var params = { url: '/v1/company/uploadLogo', body: body };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);

  return Company;
}(_request.Request);