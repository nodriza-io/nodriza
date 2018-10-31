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
  "cron": {
    "model": "cron",
    "skipAll": true
  },
  "systemProcess": {
    "model": "systemProcess",
    "skipAll": true
  },
  "timeTaken": {
    "type": "integer",
    "defaultsTo": 0,
    "skipAll": true
  },
  "status": {
    "type": "string",
    "enum": ["initialized", "success", "error"],
    "defaultsTo": "initialized",
    "required": true,
    "skipAll": true
  },
  "message": {
    "type": "string",
    "skipAll": true
  }
};