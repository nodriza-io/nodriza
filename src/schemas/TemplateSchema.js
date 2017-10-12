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
  "oem": {
    "description": "Essential data required by platform",
    "example": false,
    "required": true,
    "type": "boolean",
    "defaultsTo": true
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
    "required": true
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
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}