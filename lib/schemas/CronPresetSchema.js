"use strict";

module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "readOnly": {
    "skipAll": true,
    "type": "boolean"
  },
  "name": {
    "example": "@5minutes",
    "required": true,
    "unique": true,
    "displayName": true,
    "type": "string"
  },
  "description": {
    "example": "Every 5 Minutes.",
    "longtext": true,
    "type": "string"
  },
  "second": {
    "example": "0",
    "required": true,
    "type": "string",
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "0"
  },
  "minute": {
    "example": "*/5",
    "required": true,
    "type": "string",
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "0"
  },
  "hour": {
    "example": "*",
    "required": true,
    "type": "string",
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "*"
  },
  "dayOfMonth": {
    "example": "*",
    "required": true,
    "type": "string",
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "*"
  },
  "month": {
    "example": "*",
    "required": true,
    "type": "string",
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "*"
  },
  "dayOfWeek": {
    "example": "*",
    "required": true,
    "type": "string",
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "*"
  }
};