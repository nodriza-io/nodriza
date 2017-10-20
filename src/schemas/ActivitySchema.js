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
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "lead": {
    "description": "Lead where the activity belongs",
    "model": "lead",
    "mustExist": true
  },
  "type": {
    "required": true,
    "type": "string",
    "enum": [
      "call",
      "task",
      "event",
      "mail"
    ]
  },
  "title": {
    "description": "Title about activity",
    "type": "string",
    "datetimerange": true
  },
  "description": {
    "description": "Description about activity",
    "type": "string",
    "maxLength": 125000
  },
  "dateTimeRange": {
    "description": "Range date about activity",
    "type": "string",
    "datetimerange": true
  }
}