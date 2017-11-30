module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "keyname": {
    "description": "Unique keyname identifier",
    "required": true,
    "type": "string",
    "alphalowerDash": true,
    "unique": true
  },
  "description": {
    "type": "string",
    "required": true
  },
  "periodicityPreset": {
    "model": "periodicityPreset",
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
  }
}