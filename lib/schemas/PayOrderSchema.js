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
  "payOrderNumber": {
    "description": "Unique pay order idetification number",
    "unique": true,
    "displayName": true,
    "type": "string"
  },
  "title": {
    "required": true,
    "displayName": true,
    "type": "string"
  },
  "issueDate": {
    "type": "datetime"
  },
  "dueDate": {
    "type": "datetime"
  },
  "status": {
    "type": "string",
    "defaultsTo": "draft",
    "skipAll": true,
    "enum": ["draft", "approved", "partial", "paid", "cancelled", "refunded"]
  },
  "currency": {
    "model": "currency"
  },
  "taxRate": {
    "model": "tax"
  },
  "amount": {
    "type": "float",
    "required": true
  },
  "tax": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "total": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "invoice": {
    "model": "invoice",
    "skipAll": true
  }
};