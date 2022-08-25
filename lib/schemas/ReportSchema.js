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
  "title": {
    "displayName": true,
    "required": true,
    "type": "string"
  },
  "specialObservations": {
    "type": "string",
    "longtext": "true"
  },
  "currency": {
    "description": "Filter report by this currency",
    "model": "currency",
    "noCreate": true
  },
  "country": {
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "description": {
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "layout": {
    "description": "Report layout.",
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "report",
      "category": "layout"
    }
  },
  "users": {
    "description": "Filter report by these users",
    "type": "array",
    "multiple": "user"
  },
  "startDate": {
    "description": "Report start date",
    "required": true,
    "type": "datetime"
  },
  "endDate": {
    "description": "Report end date",
    "required": true,
    "type": "datetime"
  },
  "periodRange": {
    "required": true,
    "type": "string",
    "enum": ["Daily", "Weekly", "Biweekly", "Monthly", "Bimestrial", "Quarterly", "FourMonthPeriod", "Semestral", "Annual"]
  },
  "days": {
    "description": "Number of days in the report",
    "required": true,
    "type": "integer",
    "skipAll": true
  },
  "periodsCount": {
    "description": "Number periods",
    "required": true,
    "type": "integer",
    "skipAll": true
  },
  "periods": {
    "description": "Periods generated in the report",
    "required": true,
    "type": "json",
    "skipAll": true
  },
  "allPeriodsEnded": {
    "type": "boolean",
    "skipAll": true
  }
};