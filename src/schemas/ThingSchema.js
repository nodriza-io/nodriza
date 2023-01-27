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
  "description": {
    "type": "string",
    "displayName": true
  },
  "allowConnection": {
    "type": "boolean",
    "defaultsTo": true
  },
  "assignedTo": {
    "description": "Thing assingned to",
    "model": "user",
    "required": true
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
  "firmware": {
    "type": "string",
    "skipAll": true
  },
  "serial": {
    "type": "string",
    "skipAll": true
  },
  "dataHandler": {
    "description": "Data handler function",
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
  },
  "onProposalCreated": {
    "description": "Triggers when proposal has been created",
    "model": "thingTrigger",
    "mustExist": true
  },
  "onProposalReady": {
    "description": "Triggers when proposal status changed to READY!",
    "model": "thingTrigger",
    "mustExist": true
  },
  "onProposalApproved": {
    "description": "Triggers when proposal status changed to APPROVED!",
    "model": "thingTrigger",
    "mustExist": true
  },
  "onProposalDenied": {
    "description": "Triggers when proposal status changed to DENIED!",
    "model": "thingTrigger",
    "mustExist": true
  },
  "onProposalOpened": {
    "description": "Triggers when proposal has been opened",
    "model": "thingTrigger",
    "mustExist": true
  },
  "onProposalWarm": {
    "description": "Triggers when proposal rating is WARM",
    "model": "thingTrigger",
    "mustExist": true
  },
  "onProposalHot": {
    "description": "Triggers when proposal rating is HOT",
    "model": "thingTrigger",
    "mustExist": true
  },
  "specialObservations": {
    "type": "string",
    "longtext": "true"
  }
}