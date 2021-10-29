module.exports = {
  "keyname": {
    "unique": true,
    "primaryKey": true,
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "type": {
    "required": true,
    "type": "string",
    "skipAll": true,
    "enum": [
      "model",
      "controller"
    ]
  },
  "content": {
    "required": true,
    "type": "string",
    "skipAll": true
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