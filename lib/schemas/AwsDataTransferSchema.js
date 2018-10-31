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
  "awsAccount": {
    "required": true,
    "model": "awsAccount",
    "skipAll": true
  },
  "awsInstance": {
    "model": "awsInstance",
    "unique": true,
    "required": true,
    "skipAll": true
  },
  "regionName": {
    "required": true,
    "skipAll": true,
    "type": "string",
    "example": "us-east-1"
  },
  "usage": {
    "type": "float",
    "defaultsTo": 0
  },
  "quota": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "product": {
    "model": "product",
    "skipAll": true
  }
};