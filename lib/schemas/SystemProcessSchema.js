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
  "service": {
    "required": true,
    "type": "string",
    "enum": ["Example"]
  },
  "step": {
    "type": "string",
    "skipAll": true
  },
  "tasks": {
    "type": "array",
    "skipAll": true
  },
  "status": {
    "type": "string",
    "enum": ["created", "running", "error", "done"],
    "defaultsTo": "created"
  },
  "options": {
    "type": "json",
    "defaultsTo": {}
  },
  "error": {},
  "results": {
    "type": "json",
    "defaultsTo": {}
  },
  "autorun": {
    "type": "boolean",
    "defaultsTo": false
  }
};