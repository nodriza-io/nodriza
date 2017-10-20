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
<<<<<<< HEAD
  "assignedTo": {
    "description": "User where the activity belongs",
    "required": true,
    "model": "user",
    "mustExist": true
  },
  "lead": {
    "description": "Lead where the activity belongs",
    "required": true,
=======
  "lead": {
    "description": "Lead where the activity belongs",
>>>>>>> c9eb10ee3fd9ba03d37e7cc6524f95c3c44d16e8
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
<<<<<<< HEAD
      "email"
=======
      "mail"
>>>>>>> c9eb10ee3fd9ba03d37e7cc6524f95c3c44d16e8
    ]
  },
  "title": {
    "description": "Title about activity",
<<<<<<< HEAD
    "required": true,
    "type": "string"
=======
    "type": "string",
    "datetimerange": true
>>>>>>> c9eb10ee3fd9ba03d37e7cc6524f95c3c44d16e8
  },
  "description": {
    "description": "Description about activity",
    "type": "string",
    "maxLength": 125000
  },
<<<<<<< HEAD
  "startingDate": {
    "description": "Starting hour about activity",
    "type": "datetime"
  },
  "endingDate": {
    "description": "Ending hour about activity",
    "type": "datetime"
=======
  "dateTimeRange": {
    "description": "Range date about activity",
    "type": "string",
    "datetimerange": true
>>>>>>> c9eb10ee3fd9ba03d37e7cc6524f95c3c44d16e8
  }
}