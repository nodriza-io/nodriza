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
    "model": "awsregion",
    "noCreate": true
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
  "awsPriceMultiplier": {
    "required": true,
    "min": 1,
    "defaultsTo": 1,
    "type": "float"
  },
  "costOverMonth": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "cost": {
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
    "type": "float",
    "skipAll": true
  },
  "dataTransferOutQuota": {
    "min": 0,
    "defaultsTo": 0,
    "type": "float"
  },
  "dataTransferProduct": {
    "model": "product",
    "skipAll": true
  },
  "ioRequestUsage": {
    "min": 0,
    "defaultsTo": 0,
    "type": "float",
    "skipAll": true
  },
  "ioRequestQuota": {
    "min": 0,
    "defaultsTo": 0,
    "type": "float"
  },
  "ioRequestProduct": {
    "model": "product",
    "skipAll": true
  },
  "license": {
    "model": "product"
  },
  "numberOfLicenses": {
    "min": 0,
    "defaultsTo": 0,
    "type": "integer"
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
  "trackAsExternalLocationTransfer": {
    "type": "boolean",
    "defaultsTo": true
  },
  "autoStartBehavior": {
    "type": "array",
    "multiple": "cronPreset"
  },
  "autoStopBehavior": {
    "type": "array",
    "multiple": "cronPreset"
  },
  "responsables": {
    "type": "array",
    "multiple": "user"
  }
}