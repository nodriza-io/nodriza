module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "schedule": {
    "model": "schedule",
    "required": true
  },
  "takenTime": {
    "type": "integer",
    "defaultsTo": 0,
    "required": true,
    "skipAll": true
  },
  "status": {
    "type": "string",
    "enum": [
      "initialized",
      "success",
      "error"
    ],
    "defaultsTo": "initialized",
    "required": true,
    "skipAll": true
  },
  "model": {
    "type": "string",
    "required": true,
    "skipAll": true
  },
  "method": {
    "type": "string",
    "required": true,
    "skipAll": true
  },
  "message": {
    "type": "string",
    "skipAll": true
  }
}