"use strict";

module.exports = {
  "uuid": {
    "primaryKey": true,
    "required": true,
    "unique": true,
    "type": "string",
    "skipAll": true
  },
  "title": {
    "displayName": true,
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "startDate": {
    "description": "Report start date",
    "type": "datetime",
    "required": true,
    "skipAll": true
  },
  "endDate": {
    "description": "Report end date",
    "type": "datetime",
    "required": true,
    "skipAll": true
  },
  "days": {
    "description": "Number of days in the report",
    "required": true,
    "type": "integer",
    "skipAll": true
  },
  "currency": {
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "country": {
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "periodEnded": {
    "type": "boolean",
    "skipAll": true
  },
  "created": {
    "type": "integer",
    "skipAll": true
  },
  "approved": {
    "type": "integer",
    "skipAll": true
  },
  "denied": {
    "type": "integer",
    "skipAll": true
  },
  "createdAmount": {
    "type": "float",
    "skipAll": true
  },
  "approvedAmount": {
    "type": "float",
    "skipAll": true
  },
  "deniedAmount": {
    "type": "float",
    "skipAll": true
  },
  "createdDiscount": {
    "type": "float",
    "skipAll": true
  },
  "approvedDiscount": {
    "type": "float",
    "skipAll": true
  },
  "deniedDiscount": {
    "type": "float",
    "skipAll": true
  },
  "createdTotal": {
    "type": "float",
    "skipAll": true
  },
  "approvedTotal": {
    "type": "float",
    "skipAll": true
  },
  "deniedTotal": {
    "type": "float",
    "skipAll": true
  },
  "createdViews": {
    "type": "integer",
    "skipAll": true
  },
  "approvedViews": {
    "type": "integer",
    "skipAll": true
  },
  "deniedViews": {
    "type": "integer",
    "skipAll": true
  },
  "createdAvgTime": {
    "type": "float",
    "skipAll": true
  },
  "approvedAvgTime": {
    "type": "float",
    "skipAll": true
  },
  "deniedAvgTime": {
    "type": "long",
    "skipAll": true
  },
  "graphics": {
    "type": "long",
    "skipAll": true
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
};