"use strict";

module.exports = {
  "createdByFullName": {
    "description": "Fullname of user who created the resource",
    "type": "string",
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
  "versionName": {
    "description": "Named proposal version.",
    "type": "string"
  },
  "proposal": {
    "description": "Versioned proposal",
    "required": true,
    "type": "json",
    "skipAll": true
  },
  "shared": {
    "description": "Share proposal version with client",
    "type": "boolean",
    "skipAll": true
  }
};