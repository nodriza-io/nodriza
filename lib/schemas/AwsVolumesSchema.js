"use strict";

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
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
};