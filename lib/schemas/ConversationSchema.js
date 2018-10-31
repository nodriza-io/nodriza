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
  "type": {
    "required": true,
    "type": "string"
  },
  "message": {
    "description": "Case Messages",
    "collection": "message",
    "via": "id",
    "skipAll": true
  },
  "attachment": {
    "collection": "filedata",
    "via": "id",
    "skipAll": true
  }
};