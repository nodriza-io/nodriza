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
  "layout": {
    "description": "Report layout.",
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "report"
    }
  },
  "title": {
    "displayName": true,
    "type": "string",
    "skipAll": true
  },
  "groupName": {
    "displayName": true,
    "type": "string"
  },
  "startDate": {
    "description": "Report start date",
    "type": "datetime",
    "required": true
  },
  "endDate": {
    "description": "Report end date",
    "type": "datetime",
    "required": true
  },
  "days": {
    "description": "Number of days in the report",
    "type": "integer"
  },
  "users": {
    "description": "Filter report by these users",
    "type": "array",
    "multiple": "user"
  },
  "currency": {
    "description": "Filter report by this currency",
    "model": "currency",
    "noCreate": true
  },
  "period": {
    "type": "string",
    "enum": ["Custom", "Daily", "Weekly", "Biweekly", "Monthly", "Bimestrial", "Quarterly", "FourMonthPeriod", "Semestral", "Annual"]
  },
  "completePeriod": {
    "type": "boolean",
    "skipAll": true
  },
  "alsoNotifyViewsTo": {
    "description": "Also notify these users when someone is watching the proposal",
    "type": "array",
    "multiple": "user"
  },
  "specialObservations": {
    "type": "string",
    "longtext": "true"
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
  }
};