module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "awsAccount": {
    "model": "awsAccount",
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
  "recordsImported": {
    "type": "integer",
    "defaultsTo": 0,
    "skipAll": true
  },
  "dataPoints": {
    "type": "array",
    "defaultsTo": []
  },
  "totalCost": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "assemblyId": {
    "type": "string",
    "required": true,
    "skipAll": true
  },
  "invoiceId": {
    "type": "string",
    "skipAll": true
  }
}