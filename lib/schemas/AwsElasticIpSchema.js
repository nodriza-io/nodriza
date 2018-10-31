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
  "allocationId": {
    "example": "eipalloc-12345678",
    "type": "string",
    "required": true,
    "skipAll": true
  },
  "associationId": {
    "example": "eipassoc-12345678",
    "type": "string",
    "skipAll": true
  },
  "domain": {
    "example": "vpc",
    "type": "string",
    "skipAll": true
  },
  "instanceId": {
    "example": "i-1234567890abcdef0",
    "model": "awsInstance",
    "skipAll": true
  },
  "networkInterfaceId": {
    "example": "eni-12345678",
    "type": "string",
    "skipAll": true
  },
  "networkInterfaceOwnerId": {
    "example": "123456789012",
    "type": "string",
    "skipAll": true
  },
  "privateIpAddress": {
    "example": "10.0.1.241",
    "type": "string",
    "skipAll": true
  },
  "publicIp": {
    "example": "203.0.113.0",
    "type": "string",
    "primaryKey": true,
    "skipAll": true
  },
  "awsAccount": {
    "model": "awsAccount",
    "skipAll": true
  },
  "regionName": {
    "skipAll": true,
    "model": "awsRegion",
    "noCreate": true
  },
  "product": {
    "model": "product",
    "skipAll": true
  }
};