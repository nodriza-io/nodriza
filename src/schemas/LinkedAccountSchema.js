module.exports = {
  "createdBy": {
    "description": "User who created the resource",
    "model": "user",
    "required": true,
    "skipAll": true
  },
  "updatedBy": {
    "description": "Last user who updated the resource",
    "model": "user",
    "required": true,
    "skipAll": true
  },
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "domain": {
    "description": "Domain name. Only alphanumeric, dash and underscore allowed",
    "example": "acme",
    "required": true,
    "primaryKey": true,
    "unique": true,
    "type": "string"
  },
  "apiKey": {
    "description": "API Key in uuid format",
    "required": true,
    "password": true,
    "type": "string"
  },
  "comment": {
    "description": "Describe the linked account",
    "type": "string"
  }
}