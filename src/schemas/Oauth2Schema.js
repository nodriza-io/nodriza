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
  "name": {
    "description": "App name",
    "required": true,
    "type": "string",
    "example": "Sample App",
    "unique": true,
    "displayName": true
  },
  "client_id": {
    "description": "Unique app keyname",
    "required": true,
    "example": "sample-app",
    "type": "string",
    "primaryKey": true,
    "unique": true,
    "regex": "/^([a-zA-Z0-9_-]+)$/"
  },
  "client_secret": {
    "required": true,
    "type": "string",
    "description": "Unique proposal idetification number",
    "random": 12,
    "example": "12345678910111213",
    "regex": "/^([a-zA-Z0-9_-]+)$/"
  },
  "active": {
    "description": "Activate or deactivate app",
    "type": "boolean",
    "defaultsTo": true
  }
}