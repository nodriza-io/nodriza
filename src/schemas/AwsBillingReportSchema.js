module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "reportId": {
    "required": true,
    "type": "string",
    "primaryKey": "true",
    "skipAll": true
  },
  "period": {
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "start": {
    "required": true,
    "type": "datetime",
    "skipAll": true
  },
  "end": {
    "required": true,
    "type": "datetime",
    "skipAll": true
  },
  "reportKeys": {
    "type": "array",
    "defaultsTo": [],
    "skipAll": true
  },
  "reportLines": {
    "type": "integer",
    "defaultsTo": 0,
    "skipAll": true
  }
}