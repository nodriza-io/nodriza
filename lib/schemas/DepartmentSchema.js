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
  "keyName": {
    "description": "Unique key name identifier for URL. Only alphanumeric, dash and underscore allowed",
    "example": "Management",
    "required": true,
    "type": "string",
    "unique": true,
    "primaryKey": true,
    "regex": "/^([a-zA-Z0-9_-]+)$/",
    "displayName": true,
    "existCheck": true
  },
  "name": {
    "description": "Department name",
    "example": "Pets",
    "required": true,
    "type": "string",
    "unique": true,
    "displayName": true
  },
  "description": {
    "description": "Department description",
    "example": "People in charge of a certain group",
    "type": "string"
  }
};