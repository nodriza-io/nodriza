module.exports = {
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
  "keyname": {
    "description": "Unique name identifier",
    "type": "string",
    "required": true,
    "alphanumeric": true,
    "primaryKey": true
  },
  "body": {
    "description": "Body template",
    "type": "string",
    "required": true,
    "html": true
  },
  "type": {
    "required": true,
    "type": "string",
    "enum": [
      "email",
      "contract",
      "content",
      "quotes",
      "system"
    ]
  },
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  }
}