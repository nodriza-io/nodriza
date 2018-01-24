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
    "type": "string",
    "enum": [
      "Open",
      "On Hold",
      "Pending Help Desk Action",
      "Pending Client Action",
      "Resolved",
      "Closed"
    ],
    "defaultsTo": "unassigned"
  },
  "priority": {
    "type": "string",
    "enum": [
      "Low",
      "Medium",
      "High",
      "Critical"
    ],
    "defaultsTo": "Low"
  }
}