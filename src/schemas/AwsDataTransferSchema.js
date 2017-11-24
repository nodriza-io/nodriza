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
<<<<<<< HEAD
  "quota": {
    "type": "float",
    "skipAll": true
  },
  "usage": {
    "type": "float",
=======
  "usage": {
    "type": "float",
    "defaultsTo": 0
  },
  "quota": {
    "type": "float",
    "defaultsTo": 0,
>>>>>>> c08d7f9ad39e5c4ab8ce5caca9f3e737da773c2a
    "skipAll": true
  },
  "product": {
    "model": "product",
    "skipAll": true
  }
}