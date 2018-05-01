'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = undefined;

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

var model = 'user';

var User = exports.User = function (_Request) {
  _inherits(User, _Request);

  function User(params) {
    _classCallCheck(this, User);

    params.model = model;
    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, params));
  }

  _createClass(User, [{
    key: 'addAllRoles',
    value: function addAllRoles(body, callback) {
      var params = { url: '/v1/user/addAllRoles', body: body };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'addPermissions',
    value: function addPermissions(body, callback) {
      var params = { url: '/v1/user/addPermissions', body: body };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'addRoles',
    value: function addRoles(body, callback) {
      var params = { url: '/v1/user/addRoles', body: body };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'getPermissions',
    value: function getPermissions(params, callback) {
      this.get('/v1/user/getPermissions/' + params['userId'], function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'getRoles',
    value: function getRoles(params, callback) {
      this.get('/v1/user/getRoles/' + params['userId'], function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'login',
    value: function login(body, callback) {
      var params = { url: '/v1/user/login', body: body };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'logout',
    value: function logout(callback) {
      this.delete('/v1/user/logout', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'logoutAllDevices',
    value: function logoutAllDevices(callback) {
      this.delete('/v1/user/logoutAllDevices', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'me',
    value: function me(callback) {
      this.get('/v1/user/me', function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'profile',
    value: function profile(params, callback) {
      var url = '/v1/user/profile';
      if (!_lodash2.default.isEmpty(params)) url += '?' + _queryString2.default.stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'publicProfile',
    value: function publicProfile(params, callback) {
      var url = '/v1/user/publicProfile';
      if (!_lodash2.default.isEmpty(params)) url += '?' + _queryString2.default.stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'removeAllPermissions',
    value: function removeAllPermissions(body, callback) {
      var params = { url: '/v1/user/removeAllPermissions', body: body };
      this.delete(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'removeAllRoles',
    value: function removeAllRoles(body, callback) {
      var params = { url: '/v1/user/removeAllRoles', body: body };
      this.delete(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'removePermissions',
    value: function removePermissions(body, callback) {
      var params = { url: '/v1/user/removePermissions', body: body };
      this.delete(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'removeRoles',
    value: function removeRoles(body, callback) {
      var params = { url: '/v1/user/removeRoles', body: body };
      this.delete(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'requestResetPassword',
    value: function requestResetPassword(body, callback) {
      var params = { url: '/v1/user/requestResetPassword', body: body };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'resetPassword',
    value: function resetPassword(body, callback) {
      var params = { url: '/v1/user/resetPassword', body: body };
      this.put(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'uploadAvatar',
    value: function uploadAvatar(body, callback) {
      var params = { url: '/v1/user/uploadAvatar', body: body };
      this.post(params, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }, {
    key: 'validatePassword',
    value: function validatePassword(params, callback) {
      var url = '/v1/user/validatePassword';
      if (!_lodash2.default.isEmpty(params)) url += '?' + _queryString2.default.stringify(params);
      this.get(url, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
      });
    }
  }]);

  return User;
}(_request.Request);