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
    "required": true,
    "skipAll": true
  },
  "regionName": {
    "skipAll": true,
    "required": true,
    "model": "awsRegion"
  },
  "awsInstance": {
    "model": "awsInstance",
    "required": true,
    "skipAll": true
  },
  "name": {
    "required": true,
    "displayName": true
  },
  "costCenter": {
    "model": "costCenter"
  },
  "costOverMonth": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "budget": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "overage": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "dataTransferOutUsage": {
    "min": 0,
    "defaultsTo": 0,
    "type": "float"
  },
  "dataTransferOutQuota": {
    "min": 0,
    "defaultsTo": 0,
    "type": "float"
  },
  "dataTransferProduct": {
    "model": "product"
  },
  "ioRequestUsage": {
    "min": 0,
    "defaultsTo": 0,
    "type": "float"
  },
  "ioRequestQuota": {
    "min": 0,
    "defaultsTo": 0,
    "type": "float"
  },
  "ioRequestProduct": {
    "model": "product"
  },
  "notifyHighCpuUsage": {
    "type": "boolean",
    "defaultsTo": false
  },
  "notifyBeforeDataTransferQuotaExceeded": {
    "type": "boolean",
    "defaultsTo": false
  },
  "notifyBeforeIoRequestExceeded": {
    "type": "boolean",
    "defaultsTo": false
  },
  "stopInstanceIfDataTransferQuotaExceeded": {
    "type": "boolean",
    "defaultsTo": false
  },
  "stopInstanceIfIoRequestQuotaExceeded": {
    "type": "boolean",
    "defaultsTo": false
  },
  "trackAsExternalLocationTransfers": {
    "type": "boolean",
    "defaultsTo": false
  },
  "autoStartBehavior": {
    "model": "periodicityPreset"
  },
  "autoStopBehavior": {
    "model": "periodicityPreset"
  },
  "license": {
    "model": "product"
  },
  "numberOfLicenses": {
    "min": 0,
    "defaultsTo": 0,
    "type": "integer"
  },
  "awsMultiplier": {
    "required": true,
    "min": 1,
    "defaultsTo": 1,
    "type": "float"
  }
}