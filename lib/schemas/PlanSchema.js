"use strict";

module.exports = {
  "keyname": {
    "primaryKey": true,
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "users": {
    "required": true,
    "type": "integer",
    "skipAll": true
  },
  "price": {
    "required": true,
    "type": "integer",
    "skipAll": true
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
};