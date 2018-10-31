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
  "displayId": {
    "primaryKey": true,
    "skipAll": true
  },
  "subject": {
    "required": true,
    "type": "string"
  },
  "status": {
    "type": "string",
    "enum": ["Open", "Pending", "Closed"],
    "defaultsTo": "Open",
    "skipAll": true
  },
  "priority": {
    "type": "string",
    "enum": ["Low", "Medium", "High", "Critical"],
    "defaultsTo": "Low"
  },
  "assignTo": {
    "type": "array",
    "multiple": "user"
  },
  "rating": {
    "rating": true,
    "type": "integer",
    "skipAll": true,
    "min": 1,
    "max": 5
  }
};