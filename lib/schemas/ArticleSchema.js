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
  "articleNumber": {
    "description": "Unique article idetification number",
    "unique": true,
    "random": 8,
    "displayName": true,
    "type": "string"
  },
  "referenceNumber": {
    "unique": true,
    "displayName": true,
    "type": "string"
  },
  "title": {
    "required": true,
    "type": "string"
  },
  "layout": {
    "description": "Article layout",
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "article",
      "category": "layout"
    }
  },
  "content": {
    "description": "Article content.",
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "article",
      "category": "content"
    }
  },
  "relatedUser": {
    "description": "Select the user that is related with this article",
    "model": "user",
    "mustExist": true
  },
  "relatedLead": {
    "description": "Select the lead that is related with this article",
    "model": "lead",
    "mustExist": true
  },
  "starred": {
    "skipAll": true,
    "type": "array"
  },
  "lastSeen": {
    "type": "datetime",
    "skipAll": true
  },
  "avgTime": {
    "type": "long",
    "skipAll": true
  },
  "views": {
    "type": "integer",
    "skipAll": true
  },
  "opened": {
    "description": "How many views has the document has been opened",
    "type": "array",
    "defaultsTo": [],
    "skipAll": true
  },
  "viewsAlerts": {
    "description": "Number of alerts when client open the proposal",
    "type": "integer",
    "defaultsTo": 1,
    "min": 0,
    "max": 10
  }
};