module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "availabilityZone": {
    "skipAll": true,
    "type": "string"
  },
  "attachments": {
    "skipAll": true,
    "type": "json"
  },
  "encrypted": {
    "skipAll": true,
    "type": "boolean"
  },
  "volumeType": {
    "skipAll": true,
    "type": "string"
  },
  "volumeId": {
    "skipAll": true,
    "unique": true,
    "required": true,
    "primaryKey": true,
    "type": "string"
  },
  "state": {
    "skipAll": true,
    "type": "string"
  },
  "iops": {
    "skipAll": true,
    "type": "integer"
  },
  "snapshotId": {
    "skipAll": true,
    "type": "string"
  },
  "createTime": {
    "skipAll": true,
    "type": "datetime"
  },
  "size": {
    "skipAll": true,
    "type": "integer"
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
  "awsInstance": {
    "description": "Allow assign specific permission to one role",
    "model": "awsInstance",
    "skipAll": true
  },
  "regionName": {
    "skipAll": true,
    "model": "awsRegion"
  }
}