"use strict";

module.exports = {
  "name": {
    "description": "Country name",
    "example": "Canada",
    "displayName": true,
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "code": {
    "description": "Universal country code",
    "example": "CA",
    "primaryKey": true,
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
};