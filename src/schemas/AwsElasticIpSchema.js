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
    "required": true,
    "type": "string",
    "skipAll": true,
    "primaryKey": true
  },
  "associationId": {
    "example": "eipassoc-12345678",
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "domain": {
    "example": "vpc",
    "required": true,
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
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "awsAccount": {
    "required": true,
    "model": "awsAccount",
    "skipAll": true
  },
  "regionName": {
    "required": true,
    "skipAll": true,
    "model": "awsRegion"
  }
}