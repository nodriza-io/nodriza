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
  "title": {
    "description": "Template friendly name",
    "required": true,
    "type": "string",
    "displayName": true
  },
  "country": {
    "required": true,
    "enum": ["us", "co", "es", "fr", "mx", "hr"],
    "type": "string"
  },
  "keyname": {
    "description": "Unique keyname identifier. Only alphanumeric, dash and underscore allowed",
    "required": true,
    "type": "string",
    "primaryKey": true,
    "unique": true,
    "maxLength": 256,
    "regex": "/^([a-zA-Z0-9_-]+)$/"
  },
  "description": {
    "description": "Template friendly name",
    "required": true,
    "type": "string",
    "displayName": true
  },
  "language": {
    "required": true,
    "type": "string"
  },
  "type": {
    "required": true,
    "type": "string",
    "enum": ["proposal", "contract", "invoice", "paymentReceived", "article", "content", "email"]
  },
  "body": {
    "description": "Body template",
    "type": "string",
    "required": true,
    "html": true
  },
  "html": {
    "description": "Rendered template example",
    "type": "string",
    "required": true,
    "html": true
  },
  "thumb": {
    "description": "Rendered template example",
    "type": "string",
    "required": true
  },
  "pdf": {
    "description": "Rendered PDF example",
    "type": "string",
    "required": true
  },
  "business": {
    "type": "string",
    "enum": ["Any", "Real Estate", "Construction", "Consulting", "Marketing", "Financial", "Car", "Personal", "Business Plans", "Education", "Healthcare", "Legal", "Manufacturing", "Technology"],
    "required": true
  },
  "department": {
    "type": "string",
    "enum": ["Production", "Research and Development", "Sales", "Purchasing", "Marketing", "Human Resource", "Accounting and Finance", "Customer Service", "IT", "Distribution"],
    "required": true
  },
  "category": {
    "type": "string",
    "enum": ["layout", "content"],
    "required": true
  }
};