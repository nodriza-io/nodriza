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
  "assignedTo": {
    "description": "User where the activity belongs",
    "required": true,
    "model": "user",
    "mustExist": true
  },
  "lead": {
    "description": "Lead where the activity belongs",
    "required": true,
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
      "email"
    ]
  },
  "title": {
    "description": "Title about activity",
    "required": true,
    "type": "string"
  },
  "description": {
    "description": "Description about activity",
    "type": "string",
    "maxLength": 125000
  },
  "startingDate": {
    "description": "Starting hour about activity",
    "type": "datetime"
  },
  "endingDate": {
    "description": "Ending hour about activity",
    "type": "datetime"
  }
}