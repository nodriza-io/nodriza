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
  "runRule": {
    "model": "periodicityPreset"
  },
  "stopRule": {
    "model": "periodicityPreset"
  },
  "amiLaunchIndex": {
    "required": true,
    "type": "integer",
    "skipAll": true
  },
  "imageId": {
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "instanceId": {
    "required": true,
    "primaryKey": true,
    "type": "string",
    "unique": true,
    "skipAll": true
  },
  "instanceType": {
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "keyName": {
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "launchTime": {
    "required": true,
    "type": "json",
    "skipAll": true
  },
  "lastStart": {
    "type": "datetime",
    "skipAll": true
  },
  "lastStop": {
    "type": "datetime",
    "skipAll": true
  },
  "monitoring": {
    "required": true,
    "type": "json",
    "skipAll": true
  },
  "placement": {
    "required": true,
    "type": "json",
    "skipAll": true
  },
  "privateDnsName": {
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "privateIpAddress": {
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "productCodes": {
    "type": "json",
    "skipAll": true
  },
  "publicDnsName": {
    "type": "string",
    "skipAll": true
  },
  "publicIpAddress": {
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "state": {
    "required": true,
    "type": "json",
    "skipAll": true
  },
  "stateTransitionReason": {
    "type": "string",
    "skipAll": true
  },
  "subnetId": {
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "vpcId": {
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "architecture": {
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "blockDeviceMappings": {
    "required": true,
    "type": "json",
    "skipAll": true
  },
  "clientToken": {
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "ebsOptimized": {
    "required": true,
    "type": "boolean",
    "skipAll": true
  },
  "enaSupport": {
    "required": true,
    "type": "boolean",
    "skipAll": true
  },
  "hypervisor": {
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "elasticGpuAssociations": {
    "type": "json",
    "skipAll": true
  },
  "networkInterfaces": {
    "required": true,
    "type": "json",
    "skipAll": true
  },
  "rootDeviceName": {
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "rootDeviceType": {
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "securityGroups": {
    "required": true,
    "type": "json",
    "skipAll": true
  },
  "sourceDestCheck": {
    "required": true,
    "type": "boolean",
    "skipAll": true
  },
  "tags": {
    "required": true,
    "type": "json",
    "skipAll": true
  },
  "virtualizationType": {
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "regionName": {
    "required": true,
    "skipAll": true,
    "model": "awsRegion"
  },
  "awsAccountNumber": {
    "example": "099721109479",
    "required": true,
    "model": "awsAccount",
    "skipAll": true
  }
}