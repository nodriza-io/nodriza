module.exports = {
  "code": {
    "description": "Universal country code",
    "example": "CA",
    "primaryKey": true,
    "type": "string",
    "required": true,
    "skipAll": true
  },
  "name": {
    "description": "Country name",
    "displayName": true,
    "example": "Canada",
    "type": "string",
    "required": true,
    "skipAll": true
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}