module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "fromLocation": {
    "required": true,
    "skipAll": true,
    "type": "string",
    "example": "US East (N. Virginia)",
    "description": "Friendly region name"
  },
  "regionName": {
    "required": true,
    "skipAll": true,
    "type": "string",
    "example": "us-east-1",
    "primaryKey": "true"
  },
  "product": {
    "model": "product",
    "skipAll": true
  }
}