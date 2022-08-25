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
  "key": {
    "type": "string",
    "required": true,
    "notEmpty": true
  },
  "location": {
    "type": "string"
  },
  "size": {
    "type": "integer"
  },
  "children": {
    "type": "array",
    "defaultsTo": []
  },
  "parent": {
    "type": "string"
  },
  "isDir": {
    "type": "boolean",
    "defaultsTo": false
  },
  "md5": {
    "type": "string"
  },
  "contentType": {
    "type": "string"
  },
  "hash": {
    "type": "string"
  }
};