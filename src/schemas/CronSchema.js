module.exports = {
  "keyname": {
    "type": "string",
    "alphanumeric": true,
    "notEmpty": true,
    "required": true
  },
  "description": {
    "type": "string",
    "required": true
  },
  "cronPreset": {
    "model": "cronpreset",
    "required": true
  },
  "model": {
    "type": "string",
    "required": true
  },
  "method": {
    "type": "string",
    "required": true
  },
  "options": {
    "type": "json",
    "required": true,
    "defaultsTo": {}
  },
  "active": {
    "type": "boolean",
    "defaultsTo": true
  },
  "notifyTo": {
    "type": "string"
  }
}