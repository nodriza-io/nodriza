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
    "required": true,
    "model": "awsAccount",
    "skipAll": true
  },
  "awsInstance": {
    "model": "awsInstance",
    "unique": true,
    "required": true,
    "skipAll": true
  },
  "regionName": {
    "required": true,
    "skipAll": true,
    "type": "string",
    "example": "us-east-1"
  },
  "quota": {
    "type": "float",
    "skipAll": true
  },
  "usage": {
    "type": "float",
    "skipAll": true
  },
  "product": {
    "model": "product",
    "skipAll": true
  }
}