module.exports = {
  "readOnly": {
    "defaultsTo": false,
    "required": true,
    "skipAll": true,
    "type": "boolean"
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
  },
  "description": {
    "description": "Periodicity Preset Description",
    "example": "Every 5 Minutes.",
    "type": "string",
    "unique": true,
    "required": true
  },
  "dayOfWeek": {
    "example": "*",
    "required": true,
    "type": "string",
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "*"
  },
  "month": {
    "example": "*",
    "required": true,
    "type": "string",
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "*"
  },
  "dayOfMonth": {
    "example": "*",
    "required": true,
    "type": "string",
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "*"
  },
  "hour": {
    "example": "*",
    "required": true,
    "type": "string",
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "*"
  },
  "minute": {
    "example": "*/5",
    "required": true,
    "type": "string",
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "0"
  },
  "second": {
    "example": "0",
    "required": true,
    "type": "string",
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "0"
  }
}