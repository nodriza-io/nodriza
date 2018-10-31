"use strict";

module.exports = {
  "readOnly": {
    "defaultsTo": true,
    "required": true,
    "skipAll": true,
    "type": "boolean"
  },
  "createdBy": {
    "description": "User who created the resource",
    "model": "user",
    "required": true,
    "skipAll": true
  },
  "updatedBy": {
    "description": "Last user who updated the resource",
    "model": "user",
    "required": true,
    "skipAll": true
  },
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "name": {
    "type": "string",
    "unique": true,
    "required": true
  },
  "dayOfWeek": {
    "required": true,
    "type": "string",
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "*"
  },
  "month": {
    "required": true,
    "type": "string",
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "*"
  },
  "dayOfMonth": {
    "required": true,
    "type": "string",
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "*"
  },
  "hour": {
    "required": true,
    "type": "string",
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "*"
  },
  "minute": {
    "required": true,
    "type": "string",
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "0"
  },
  "second": {
    "required": true,
    "type": "string",
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "0"
  }
};