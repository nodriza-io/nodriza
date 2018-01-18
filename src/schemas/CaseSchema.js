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
  "displayId": {
    "primaryKey": true,
    "skipAll": true
  },
  "subject": {
    "required": true,
    "type": "string"
  },
  "status": {
    "required": true,
    "type": "string"
  },
  "severityCode": {
    "required": true,
    "type": "string"
  }
}