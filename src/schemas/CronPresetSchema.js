module.exports = {
  "readOnly": {
    "skipAll": true,
    "type": "boolean"
  },
  "name": {
    "example": "Every 5 Minutes.",
    "required": true,
    "unique": true,
    "displayName": true,
    "type": "string"
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
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}