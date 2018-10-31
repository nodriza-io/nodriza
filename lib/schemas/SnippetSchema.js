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
  "name": {
    "description": "Snippet name",
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
  "content": {
    "description": "Article content.",
    "type": "string",
    "html": true,
    "target": "template"
  },
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  }
};