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
  "thingName": {
    "type": "string",
    "required": true,
    "unique": true,
    "displayName": true
  },
  "allowConnection": {
    "type": "boolean",
    "defaultsTo": false
  },
  "assignedTo": {
    "description": "Thing assingned to",
    "model": "user"
  },
  "macAddress": {
    "type": "string",
    "skipAll": true
  },
  "localIp": {
    "type": "string",
    "skipAll": true
  },
  "device": {
    "type": "string",
    "skipAll": true
  },
  "firmwareVersion": {
    "type": "string",
    "skipAll": true
  },
  "shadows": {
    "type": "array",
    "multiple": "thing"
  },
  "eventHandler": {
    "description": "Handelbars Helper Function",
    "type": "string",
    "longtext": "true"
  },
  "specialObservations": {
    "type": "string",
    "longtext": "true"
  },
  "online": {
    "type": "boolean",
    "defaultsTo": false,
    "skipAll": true
  },
  "connectedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "disconnectedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "socketId": {
    "type": "string",
    "skipAll": true
  },
  "lastError": {
    "type": "string",
    "skipAll": true
  }
}