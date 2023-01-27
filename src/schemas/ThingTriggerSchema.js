module.exports = {
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
  "name": {
    "description": "Thing Trigger name",
    "required": true,
    "type": "string",
    "unique": true,
    "displayName": true
  },
  "pins": {
    "type": "string",
    "description": "Separete multiple pins with comma e.g 2,5,3",
    "regex": "/^([0-9,]+)$/",
    "required": true
  },
  "state": {
    "type": "boolean",
    "defaultsTo": true,
    "required": true
  },
  "stateTime": {
    "description": "Time of HIGH or LOW state",
    "type": "integer",
    "required": true,
    "defaultsTo": 1000,
    "min": 1
  },
  "startDelay": {
    "description": "Delay before start in milliseconds",
    "type": "integer",
    "defaultsTo": 0
  },
  "intervalDelay": {
    "description": "Delay before every interaction",
    "type": "integer",
    "defaultsTo": 0
  },
  "repeats": {
    "description": "How many repetitions",
    "type": "integer",
    "defaultsTo": 1,
    "min": 1
  },
  "repeatsByViews": {
    "description": "How many repetitions",
    "type": "boolean",
    "defaultsTo": false
  }
}