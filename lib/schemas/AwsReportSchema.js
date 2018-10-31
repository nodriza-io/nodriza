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
  "awsBill": {
    "model": "awsBill",
    "required": true,
    "skipAll": true
  },
  "usageAccount": {
    "model": "awsAccount",
    "required": true,
    "skipAll": true
  },
  "payerAccount": {
    "model": "awsAccount",
    "required": true,
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
};