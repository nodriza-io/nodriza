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
    "regex": "/^([a-zA-Z0-9 _-]+)$/",
    "minLength": 2,
    "maxLength": 256,
    "unique": true
  },
  "description": {
    "type": "string",
    "required": true
  },
  "cronPreset": {
    "model": "cronPreset",
    "required": true,
    "mustExist": true
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