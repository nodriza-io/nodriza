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
  "relatedLead": {
    "description": "Select the lead that is related with this activity",
    "model": "lead",
    "mustExist": true
  },
  "relatedQuote": {
    "description": "Select the quote that is related with this activity",
    "model": "quote",
    "mustExist": true
  },
  "type": {
    "required": true,
    "type": "string",
    "enum": [
      "Call",
      "Task",
      "Event",
      "Email"
    ],
    "defaultsTo": "Call"
  },
  "subject": {
    "required": true,
    "type": "string"
  },
  "comment": {
    "type": "string"
  },
  "assignedTo": {
    "description": "User where the activity belongs",
    "model": "user",
    "mustExist": true
  },
  "status": {
    "description": "Task has been completed or not",
    "type": "string",
    "defaultsTo": "Pending",
    "enum": [
      "Pending",
      "In Progress",
      "Completed"
    ]
  },
  "address": {
    "description": "Google Maps address location",
    "type": "string",
    "address": true
  },
  "startingDate": {
    "description": "Starting hour of activity",
    "type": "datetime"
  },
  "endingDate": {
    "description": "Ending hour of activity",
    "type": "datetime"
  },
  "dueDate": {
    "description": "Date at which the task is expected to be finished.",
    "type": "datetime"
  },
  "emailContent": {
    "description": "Date at which the task is expected to be finished.",
    "type": "string",
    "html": true
  }
}