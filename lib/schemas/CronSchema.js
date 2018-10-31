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
  "description": {
    "type": "string",
    "required": true
  },
  "cronPreset": {
    "model": "cronPreset",
    "required": true,
    "mustExist": true
  },
  "model": {
    "type": "string",
    "required": true
  },
  "method": {
    "type": "string",
    "required": true
  },
  "options": {
    "type": "json",
    "required": true,
    "defaultsTo": {}
  }
};