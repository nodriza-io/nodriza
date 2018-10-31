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
  "date": {
    "required": true,
    "type": "string"
  },
  "timestamp": {
    "required": true,
    "type": "integer"
  },
  "source": {
    "required": true,
    "type": "string",
    "enum": ["USD"]
  },
  "quotes": {
    "required": true,
    "type": "object"
  }
};