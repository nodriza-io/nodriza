module.exports = {
  "description": {
    "type": "string",
    "required": true
  },
  "dayOfWeek": {
    "notEmpty": true,
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "*",
    "required": true
  },
  "month": {
    "notEmpty": true,
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "*",
    "required": true
  },
  "dayOfMonth": {
    "notEmpty": true,
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "*",
    "required": true
  },
  "hour": {
    "notEmpty": true,
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "*",
    "required": true
  },
  "minute": {
    "notEmpty": true,
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "0",
    "required": true
  },
  "second": {
    "notEmpty": true,
    "regex": "/^(?:[1-9]?\\d|\\*)(?:(?:[\\/-][1-9]?\\d)|(?:,[1-9]?\\d)+)?$/",
    "defaultsTo": "0",
    "required": true
  },
  "id": {
    "type": "string",
    "autoIncrement": true,
    "primaryKey": true,
    "unique": true
  },
  "createdAt": {
    "type": "datetime",
    "default": "NOW"
  },
  "updatedAt": {
    "type": "datetime",
    "default": "NOW"
  }
}