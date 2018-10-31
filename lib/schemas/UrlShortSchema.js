"use strict";

module.exports = {
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
  "url": {
    "required": true,
    "skipUpdate": true,
    "type": "string"
  },
  "short": {
    "required": true,
    "skipAll": true,
    "type": "string"
  },
  "uuid": {
    "required": true,
    "unique": true,
    "skipAll": true,
    "type": "string"
  }
};