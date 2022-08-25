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
  "calendar": {
    "required": true,
    "model": "calendar"
  },
  "relatedType": {
    "required": true,
    "defaultsTo": "product",
    "type": "string",
    "enum": ["product", "proposal", "user"]
  },
  "relatedId": {
    "type": "string"
  },
  "metadata": {
    "type": "json"
  },
  "title": {
    "required": true,
    "type": "string"
  },
  "startDate": {
    "type": "datetime",
    "required": true
  },
  "endDate": {
    "type": "datetime",
    "required": true
  },
  "allDay": {
    "type": "boolean"
  }
};