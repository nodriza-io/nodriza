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
  "keyname": {
    "required": true,
    "unique": true,
    "primaryKey": true,
    "random": 8,
    "displayName": true,
    "type": "string"
  },
  "name": {
    "required": true,
    "type": "string",
    "displayName": true
  },
  "description": {
    "type": "string",
    "longtext": "true"
  },
  "products": {
    "description": "Add products to package",
    "productList": true,
    "type": "json",
    "defaultsTo": []
  },
  "snippet": {
    "model": "snippet",
    "mustExist": true
  },
  "color": {
    "type": "string",
    "color": true,
    "defaultsTo": "#EEEEEE"
  },
  "fixed": {
    "type": "boolean",
    "defaultsTo": true
  },
  "disableCollapse": {
    "type": "boolean",
    "defaultsTo": false
  },
  "disabled": {
    "type": "boolean",
    "defaultsTo": false
  }
};