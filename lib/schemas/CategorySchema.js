"use strict";

module.exports = {
  "readOnly": {
    "skipAll": true,
    "type": "boolean"
  },
  "createdBy": {
    "description": "User who created the resource",
    "model": "user",
    "skipAll": true
  },
  "updatedBy": {
    "description": "Last user who updated the resource",
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
  "name": {
    "description": "Category name",
    "example": "Pets",
    "required": true,
    "type": "string",
    "unique": true,
    "displayName": true
  },
  "slug": {
    "description": "Unique slug identifier for URL. Only alphanumeric, dash and underscore allowed",
    "example": "pets",
    "required": true,
    "primaryKey": true,
    "unique": true,
    "type": "string",
    "regex": "/^([a-zA-Z0-9_-]+)$/"
  },
  "parent": {
    "model": "category"
  },
  "type": {
    "description": "Category Type",
    "example": "Pricing List",
    "type": "string",
    "defaultsTo": "Product",
    "enum": ["Product", "Pricing List", "Type", "Status", "Industry", "Size", "Group"]
  },
  "disabled": {
    "type": "boolean",
    "defaultsTo": false
  }
};