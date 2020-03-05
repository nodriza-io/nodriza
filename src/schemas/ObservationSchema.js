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
    "type": "string",
    "required": true
  },
  "type": {
    "type": "string",
    "required": true
  },
  "color": {
    "type": "string",
    "color": true
  },
  "active": {
    "type": "boolean",
    "defaultsTo": true
  },
  "script": {
    "type": "string",
    "required": true,
    "longtext": "true"
  }
}