module.exports = {
  "cron": {
    "model": "cron",
    "required": true
  },
  "takenTime": {
    "type": "integer",
    "defaultsTo": 0,
    "required": true
  },
  "status": {
    "type": "string",
    "enum": [
      "initialized",
      "success",
      "error"
    ],
    "defaultsTo": "initialized",
    "required": true
  },
  "model": {
    "type": "string",
    "required": true
  },
  "method": {
    "type": "string",
    "required": true
  },
  "message": {
    "type": "string"
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}