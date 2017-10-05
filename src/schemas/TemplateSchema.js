module.exports = {
  "oem": {
    "description": "Essential data required by platform",
    "example": false,
    "type": "boolean",
    "required": true,
    "defaultsTo": true
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
  "keyname": {
    "description": "Unique name identifier",
    "type": "string",
    "alphanumeric": true,
    "primaryKey": true,
    "required": true
  },
  "body": {
    "description": "Body template",
    "type": "string",
    "required": true
  },
  "type": {
    "type": "string",
    "required": true,
    "enum": [
      "email",
      "contract",
      "content",
      "quotes",
      "system"
    ]
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}