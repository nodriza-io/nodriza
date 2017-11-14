module.exports = {
  "availabilityZone": {
    "required": true,
    "type": "string"
  },
  "attachments": {
    "required": true,
    "type": "json"
  },
  "encrypted": {
    "required": true,
    "type": "boolean"
  },
  "volumeType": {
    "required": true,
    "type": "string"
  },
  "volumeId": {
    "required": true,
    "primaryKey": true,
    "type": "string"
  },
  "state": {
    "required": true,
    "type": "string"
  },
  "iops": {
    "required": true,
    "type": "integer"
  },
  "snapshotId": {
    "required": true,
    "type": "string"
  },
  "createTime": {
    "required": true,
    "type": "datetime"
  },
  "size": {
    "required": true,
    "type": "integer"
  },
  "awsAccountNumber": {
    "example": "099721109479",
    "required": true,
    "model": "awsAccount"
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}