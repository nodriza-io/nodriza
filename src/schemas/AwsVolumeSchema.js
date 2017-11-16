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
    "required": true,
    "skipAll": true,
    "type": "string"
  },
  "attachments": {
    "required": true,
    "skipAll": true,
    "type": "json"
  },
  "encrypted": {
    "required": true,
    "skipAll": true,
    "type": "boolean"
  },
  "volumeType": {
    "required": true,
    "skipAll": true,
    "type": "string"
  },
  "volumeId": {
    "required": true,
    "skipAll": true,
    "primaryKey": true,
    "type": "string"
  },
  "state": {
    "required": true,
    "skipAll": true,
    "type": "string"
  },
  "iops": {
    "required": true,
    "skipAll": true,
    "type": "integer"
  },
  "snapshotId": {
    "required": true,
    "skipAll": true,
    "type": "string"
  },
  "createTime": {
    "required": true,
    "skipAll": true,
    "type": "datetime"
  },
  "size": {
    "required": true,
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
  }
}