'use strict';
/* eslint-disable no-unused-vars */

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

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

var model = 'user';

var User = /*#__PURE__*/function (_Request) {
  _inherits(User, _Request);

  var _super = _createSuper(User);

  function User(params) {
    _classCallCheck(this, User);

    params.model = model;
    return _super.call(this, params);
  }
  /**
  * PUT /v1/user/addAllRoles [PRIVATE]
  *
  * Add all available roles to user
  *
  * @param  {Object} params
  * - @param  {String} userId * -> (In Body)  e.g 5941abf8e304bac92a6b521c
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */


  _createClass(User, [{
    key: "addAllRoles",
    value: function addAllRoles(body, callback) {
      var params = {
        url: '/v1/user/addAllRoles',
        body: body
      };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * PUT /v1/user/addPermissions [PRIVATE]
    *
    * Add one or more user permissions
    *
    * @param  {Object} params
    * - @param  {String} userId * -> (In Body)  e.g 5941abf8e304bac92a6b521c
    * - @param  {Array} permissionKeynames * -> (In Body)  e.g region,user_find,department_create_name
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "addPermissions",
    value: function addPermissions(body, callback) {
      var params = {
        url: '/v1/user/addPermissions',
        body: body
      };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * PUT /v1/user/addRoles [PRIVATE]
    *
    * Add one or more user roles
    *
    * @param  {Object} params
    * - @param  {String} userId * -> (In Body)  e.g 5941abf8e304bac92a6b521c
    * - @param  {Array} roleKeynames * -> (In Body)  e.g sales,support
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "addRoles",
    value: function addRoles(body, callback) {
      var params = {
        url: '/v1/user/addRoles',
        body: body
      };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * PUT /v1/user/changeStatus [PRIVATE]
    *
    * change user estatus
    *
    * @param  {Object} params
    * - @param  {String} id * -> (In Body)  e.g 5a55470ce6519c07837bfa12
    * - @param  {String} email  -> (In Body)  e.g Inactive
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "changeStatus",
    value: function changeStatus(body, callback) {
      var params = {
        url: '/v1/user/changeStatus',
        body: body
      };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/user/getPermissions/{userId} [PRIVATE]
    *
    * Return an array with user permissions
    *
    * @param  {Object} params
    * - @param  {String} userId * -> (In path) User Id -> e.g: 5941abf8e304bac92a6b521c
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "getPermissions",
    value: function getPermissions(params, callback) {
      this.get('/v1/user/getPermissions/' + params['userId'], function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/user/getRoles/{userId} [PRIVATE]
    *
    * Return an array with user roles
    *
    * @param  {Object} params
    * - @param  {String} userId * -> (In path) User Id -> e.g: 5941abf8e304bac92a6b521c
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "getRoles",
    value: function getRoles(params, callback) {
      this.get('/v1/user/getRoles/' + params['userId'], function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * POST /v1/user/login [PUBLIC]
    *
    * User login
    *
    * @param  {Object} params
    * - @param  {String} username * -> (In Body)  e.g jprieto@nodriza.io
    * - @param  {String} password * -> (In Body)  e.g Shox009_
    * - @param  {String} accessToken  -> (In Body)  e.g 56a69869-bf0a-4650-98e9-fcd9680b31d5
    * @param  {Function} callback
    * @return {Code} 200, 401
    */

  }, {
    key: "login",
    value: function login(body, callback) {
      var params = {
        url: '/v1/user/login',
        body: body
      };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * POST /v1/user/loginChromeAgent [PUBLIC]
    *
    * User login Chrome Agent
    *
    * @param  {Object} params
    * - @param  {String} username * -> (In Body)  e.g jprieto@nodriza.io
    * - @param  {String} password * -> (In Body)  e.g Shox009_
    * - @param  {String} accessToken  -> (In Body)  e.g 56a69869-bf0a-4650-98e9-fcd9680b31d5
    * @param  {Function} callback
    * @return {Code} 200, 401
    */

  }, {
    key: "loginChromeAgent",
    value: function loginChromeAgent(body, callback) {
      var params = {
        url: '/v1/user/loginChromeAgent',
        body: body
      };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * POST /v1/user/loginFromAgent [PUBLIC]
    *
    * User login from Agent
    *
    * @param  {Object} params
    * - @param  {String} username * -> (In Body)  e.g jprieto@nodriza.io
    * - @param  {String} password * -> (In Body)  e.g Shox009_
    * - @param  {String} accessToken  -> (In Body)  e.g 56a69869-bf0a-4650-98e9-fcd9680b31d5
    * @param  {Function} callback
    * @return {Code} 200, 401
    */

  }, {
    key: "loginFromAgent",
    value: function loginFromAgent(body, callback) {
      var params = {
        url: '/v1/user/loginFromAgent',
        body: body
      };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * DELETE /v1/user/logout [PUBLIC]
    *
    * User session logout
    *
    * @param  {Function} callback
    * @return {Code} 200, 401
    */

  }, {
    key: "logout",
    value: function logout(callback) {
      this["delete"]('/v1/user/logout', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * DELETE /v1/user/logoutAllDevices [PRIVATE]
    *
    * Logout all other logged devices
    *
    * @param  {Function} callback
    * @return {Code} 200, 401
    */

  }, {
    key: "logoutAllDevices",
    value: function logoutAllDevices(callback) {
      this["delete"]('/v1/user/logoutAllDevices', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/user/me [PRIVATE]
    *
    * Get self user information
    *
    * @param  {Function} callback
    * @return {Code} 200, 401
    */

  }, {
    key: "me",
    value: function me(callback) {
      this.get('/v1/user/me', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/user/profile [PRIVATE]
    *
    * Return an object with user profile
    *
    * @param  {Object} params
    * - @param  {String} userId  -> (In query) User Id e.g 5941abf8e304bac92a6b521c
    * - @param  {String} type  -> (In query) Profile Type
    * @param  {Function} callback
    * @return {Code} 200, 403
    */

  }, {
    key: "profile",
    value: function profile(params, callback) {
      var url = '/v1/user/profile';
      if (!_lodash["default"].isEmpty(params)) url += '?' + _queryString["default"].stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/user/publicProfile [PUBLIC]
    *
    * Return an object with user public profile and oauth provider details if exist
    *
    * @param  {Object} params
    * - @param  {String} username * -> (In query) User Id e.g jprieto@nodriza.io
    * - @param  {String} successUrl  -> (In query) Overwrite OAuth success default url e.g: https://acme.nodriza.io/app/home
    * @param  {Function} callback
    * @return {Code} 200, 401
    */

  }, {
    key: "publicProfile",
    value: function publicProfile(params, callback) {
      var url = '/v1/user/publicProfile';
      if (!_lodash["default"].isEmpty(params)) url += '?' + _queryString["default"].stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * DELETE /v1/user/removeAllPermissions [PRIVATE]
    *
    * Remove all assigned user permissions
    *
    * @param  {Object} params
    * - @param  {String} userId * -> (In Body)  e.g 5941abf8e304bac92a6b521c
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "removeAllPermissions",
    value: function removeAllPermissions(body, callback) {
      var params = {
        url: '/v1/user/removeAllPermissions',
        body: body
      };
      this["delete"](params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * DELETE /v1/user/removeAllRoles [PRIVATE]
    *
    * Remove all assigned user roles
    *
    * @param  {Object} params
    * - @param  {String} userId * -> (In Body)  e.g 5941abf8e304bac92a6b521c
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "removeAllRoles",
    value: function removeAllRoles(body, callback) {
      var params = {
        url: '/v1/user/removeAllRoles',
        body: body
      };
      this["delete"](params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * DELETE /v1/user/removePermissions [PRIVATE]
    *
    * Remove one or more user permissions
    *
    * @param  {Object} params
    * - @param  {String} userId * -> (In Body)  e.g 5941abf8e304bac92a6b521c
    * - @param  {Array} permissionKeynames * -> (In Body)  e.g region,user_find,department_create_name
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "removePermissions",
    value: function removePermissions(body, callback) {
      var params = {
        url: '/v1/user/removePermissions',
        body: body
      };
      this["delete"](params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * DELETE /v1/user/removeRoles [PRIVATE]
    *
    * Remove one or more user roles
    *
    * @param  {Object} params
    * - @param  {String} userId * -> (In Body)  e.g 5941abf8e304bac92a6b521c
    * - @param  {Array} roleKeynames * -> (In Body)  e.g sales,support
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "removeRoles",
    value: function removeRoles(body, callback) {
      var params = {
        url: '/v1/user/removeRoles',
        body: body
      };
      this["delete"](params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * PUT /v1/user/requestResetPassword [PUBLIC]
    *
    * Request reset user password
    *
    * @param  {Object} params
    * - @param  {String} email * -> (In Body)  e.g jprieto@nodriza.io
    * @param  {Function} callback
    * @return {Code} 200, 400, 404, 500
    */

  }, {
    key: "requestResetPassword",
    value: function requestResetPassword(body, callback) {
      var params = {
        url: '/v1/user/requestResetPassword',
        body: body
      };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * PUT /v1/user/resetPassword [PUBLIC]
    *
    * Set new user password
    *
    * @param  {Object} params
    * - @param  {String} email * -> (In Body)  e.g jprieto@nodriza.io
    * - @param  {String} token * -> (In Body)  e.g c1365b60-d750-4ee0-9d71-4fb9829abdb7
    * - @param  {String} password * -> (In Body)  e.g Shox009_
    * @param  {Function} callback
    * @return {Code} 200, 400, 404, 500
    */

  }, {
    key: "resetPassword",
    value: function resetPassword(body, callback) {
      var params = {
        url: '/v1/user/resetPassword',
        body: body
      };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * PUT /v1/user/updateRoles [PRIVATE]
    *
    * Update roles
    *
    * @param  {Object} params
    * - @param  {String} userId * -> (In Body)  e.g 597627fdb00c530b40f26aac
    * - @param  {Array} roleKeynames * -> (In Body)  e.g host
    * @param  {Function} callback
    * @return {Code} 200, 400, 404, 500
    */

  }, {
    key: "updateRoles",
    value: function updateRoles(body, callback) {
      var params = {
        url: '/v1/user/updateRoles',
        body: body
      };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * POST /v1/user/uploadAvatar [PRIVATE]
    *
    * Upload user avatar
    *
    * @param  {Object} params
    * - @param  {Boolean} zlib  -> (In Body)  e.g false
    * - @param  {String} userId * -> (In Body)  e.g 5941abf8e304bac92a6b521c
    * - @param  {String} base64 * -> (In Body)  e.g data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAEAIAAACDgONyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0T///////8JWPfcAAAAB3RJTUUH4QcMECsiVgwe0gAABSZJREFUeNrt2j+Il3UAx/GvdUG1NBRS27m1uDjUHA2RHXSLkC0NUoctckJIgs0tRuIkFdHQn+2WloowwqUGEfXgAvFEDrvqFIRLLJdGF4eIo+e49+u1/+DzwMPvzfPlu2tubmlpfn4AEPPQ1AMAmIYAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQNTM1APYGk9999jFJ/d/evel9z5+c+otjDHG8YVzKycOX7qxsXJ5feot9/239+TI7NnzRw9d3Xv7+uqtqZ+AreQLACBKAACiBAAgSgAAogQAIEoAAKJcA0374umVN76a/f3KnZN/HJh6y06zdmFzYW1x7B6L49jUW+DBBCDtp0d/PfLzi1cP3j63emXqLTuOv362PUdAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUTNTD2BKz9995tRz3+/58omTew5MvWX7Wn/8ziu/nV5+dePd5Zen3gJbSQDSXl9/9rPXrk29Yrv7YXVt9sdflsfGWJ56CmwpR0AAUQIAECUAAFECABAlAABRAgAQ5Rpo2pHZs+ePHrq69/b11VtTb9nWDo6Hp54AW88XAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAECUAABECQBAlAAARAkAQJQAAEQJAEDUzNQDmNKpay/s++CTMca+qZfsPMcXzq2cOHzpxsbK5fWpt8CD+QIAiBIAgCgBAIgSAIAoAQCIEgCAKNdAd4jNR+59vrn/w83zb59+Z+otjDHG2oXNhbXFsXssjmNTb7lv89t7d/78+8zhi19/9M2//9XNv+6eufnWGOPQeH/qJ2Ar7ZqbW1qan596BgD/N0dAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUf8APZl9wJ7XJfQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDctMTJUMTY6NDM6MzQrMDA6MDBJXNE+AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA3LTEyVDE2OjQzOjM0KzAwOjAwOAFpggAAAABJRU5ErkJggg==
    * @param  {Function} callback
    * @return {Code} 200, 400, 403
    */

  }, {
    key: "uploadAvatar",
    value: function uploadAvatar(body, callback) {
      var params = {
        url: '/v1/user/uploadAvatar',
        body: body
      };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
    /**
    * GET /v1/user/validatePassword [PUBLIC]
    *
    * Check if password meet requirements
    *
    * @param  {Object} params
    * - @param  {String} password * -> (In query) Password to validate
    * @param  {Function} callback
    * @return {Code} 200, 400
    */

  }, {
    key: "validatePassword",
    value: function validatePassword(params, callback) {
      var url = '/v1/user/validatePassword';
      if (!_lodash["default"].isEmpty(params)) url += '?' + _queryString["default"].stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);

  return User;
}(_request.Request);

exports.User = User;