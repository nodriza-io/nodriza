"use strict";

module.exports = {
  "createdBy": {
    "description": "User who created the resource",
    "required": true,
    "model": "user",
    "skipAll": true
  },
  "updatedBy": {
    "description": "Last user who updated the resource",
    "required": true,
    "model": "user",
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
  "title": {
    "type": "string"
  },
  "timestamp": {
    "type": "string",
    "skipAll": true
  },
  "fileSize": {
    "type": "float",
    "skipAll": true
  },
  "details": {
    "type": "json",
    "skipAll": true
  },
  "bucket": {
    "type": "string",
    "skipAll": true
  },
  "key": {
    "type": "string",
    "skipAll": true
  },
  "url": {
    "type": "string",
    "skipAll": true
  },
  "status": {
    "type": "string",
    "defaultsTo": "In Process",
    "enum": ["In Process", "Done", "Error"]
  },
  "error": {
    "type": "string",
    "skipAll": true
  },
  "type": {
    "type": "string",
    "skipAll": true,
    "enum": ["json", "dump"]
  }
};