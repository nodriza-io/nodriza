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
  "billingPeriodStart": {
    "required": true,
    "type": "datetime",
    "skipAll": true
  },
  "billingPeriodEnd": {
    "required": true,
    "type": "datetime",
    "skipAll": true
  },
  "reportKeys": {
    "type": "array",
    "defaultsTo": [],
    "skipAll": true
  },
  "totalRecords": {
    "type": "integer",
    "defaultsTo": 0,
    "skipAll": true
  },
  "secondsImporting": {
    "type": "integer",
    "defaultsTo": 0,
    "skipAll": true
  },
  "lastImportNo": {
    "type": "integer",
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
  },
  "blendedCost": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "unblendedCost": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "costByDay": {
    "type": "array",
    "skipAll": true
  }
}