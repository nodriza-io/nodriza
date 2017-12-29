module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "createdBy": {
    "description": "User who created the resource",
    "model": "user",
    "skipAll": true
  },
  "updatedBy": {
    "description": "Last user who updated the resource",
    "model": "user",
    "skipAll": true
  },
  "type": {
    "required": true,
    "type": "string",
    "enum": [
      "invoice",
      "email",
      "contract",
      "content",
      "quotes",
      "system"
    ]
  },
  "keyname": {
    "description": "Unique keyname identifier. Only alphanumeric, dash and underscore allowed",
    "type": "string",
    "required": true,
    "primaryKey": true,
    "unique": true,
    "regex": "/^([a-zA-Z0-9_-]+)$/"
  },
  "body": {
    "description": "Body template",
    "type": "string",
    "required": true,
    "html": true
  }
}