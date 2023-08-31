module.exports = {
  "active": {
    "type": "boolean"
  },
  "keyname": {
    "description": "Unique slug identifier for URL. Only alphanumeric, dash and underscore allowed",
    "example": "pets",
    "required": true,
    "primaryKey": true,
    "unique": true,
    "type": "string",
    "regex": "/^([a-zA-Z0-9_-]+)$/"
  },
  "name": {
    "description": "Spreadsheet friendly name",
    "example": "Acme",
    "required": true,
    "type": "string",
    "displayName": true
  },
  "description": {
    "description": "Describe spreadsheet functionallity",
    "type": "string",
    "longtext": "true"
  },
  "spreadSheet": {
    "spreadSheet": true,
    "description": "Extent of proposal document",
    "type": "json"
  },
  "hooks": {
    "description": "Extent of proposal document",
    "type": "string",
    "codeEditor": "javascript"
  },
  "customFunctions": {
    "description": "Extent of proposal document",
    "type": "string",
    "codeEditor": "javascript"
  },
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
  }
}