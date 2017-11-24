module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "amiLaunchIndex": {
    "type": "integer",
    "skipAll": true
  },
  "imageId": {
    "type": "string",
    "skipAll": true
  },
  "instanceId": {
    "primaryKey": true,
    "required": true,
    "type": "string",
    "unique": true,
    "skipAll": true
  },
  "instanceType": {
    "type": "string",
    "skipAll": true
  },
  "keyName": {
    "type": "string",
    "skipAll": true
  },
  "launchTime": {
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
    "type": "json",
    "skipAll": true
  },
  "placement": {
    "type": "json",
    "skipAll": true
  },
  "privateDnsName": {
    "type": "string",
    "skipAll": true
  },
  "privateIpAddress": {
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
    "description": "Instance Public IPs",
    "collection": "awselasticip",
    "via": "instanceId",
    "skipAll": true
  },
  "state": {
    "type": "json",
    "skipAll": true
  },
  "stateTransitionReason": {
    "type": "string",
    "skipAll": true
  },
  "subnetId": {
    "type": "string",
    "skipAll": true
  },
  "vpcId": {
    "type": "string",
    "skipAll": true
  },
  "architecture": {
    "type": "string",
    "skipAll": true
  },
  "blockDeviceMappings": {
    "type": "json",
    "skipAll": true
  },
  "clientToken": {
    "type": "string",
    "skipAll": true
  },
  "ebsOptimized": {
    "type": "boolean",
    "skipAll": true
  },
  "enaSupport": {
    "type": "boolean",
    "skipAll": true
  },
  "hypervisor": {
    "type": "string",
    "skipAll": true
  },
  "elasticGpuAssociations": {
    "type": "json",
    "skipAll": true
  },
  "networkInterfaces": {
    "type": "json",
    "skipAll": true
  },
  "rootDeviceName": {
    "type": "string",
    "skipAll": true
  },
  "rootDeviceType": {
    "type": "string",
    "skipAll": true
  },
  "securityGroups": {
    "type": "json",
    "skipAll": true
  },
  "sourceDestCheck": {
    "type": "boolean",
    "skipAll": true
  },
  "tags": {
    "type": "json",
    "skipAll": true
  },
  "virtualizationType": {
    "type": "string",
    "skipAll": true
  },
  "platform": {
    "example": "windows",
    "skipAll": true
  },
  "regionName": {
    "skipAll": true,
    "model": "awsRegion"
  },
  "hasEbsExtraCharge": {
    "type": "boolean",
    "skipAll": true
  },
  "product": {
    "model": "product",
    "skipAll": true
  },
  "awsAccount": {
    "required": true,
    "model": "awsAccount",
    "skipAll": true
  },
  "awsDataTransfer": {
    "model": "awsDataTransfer",
    "skipAll": true
  },
  "awsVolume": {
    "description": "Instance Volumes",
    "collection": "awsvolume",
    "via": "awsInstance",
    "skipAll": true
  },
  "operatingSystem": {
    "type": "string",
    "enum": [
      "Linux",
      "SUSE",
      "Red Hat",
      "Windows Base",
      "Windows SQL Web",
      "Windows SQL Std",
      "Windows SQL Server Enterprise"
    ]
  },
  "termType": {
    "type": "string",
    "defaultsTo": "OnDemand",
    "enum": [
      "OnDemand",
      "Reserved"
    ]
  },
  "purchaseOption": {
    "type": "string",
    "enum": [
      "No Upfront",
      "Partial Upfront",
      "All Upfront"
    ]
  },
  "leaseContractLength": {
    "type": "string",
    "enum": [
      "1yr",
      "3yr"
    ]
  },
  "offeringClass": {
    "type": "string",
    "enum": [
      "standard",
      "convertible"
    ]
  }
}