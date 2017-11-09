module.exports = {
  "name": {
    "type": "string",
    "required": true,
    "displayName": true
  },
  "utc": {
    "type": "string",
    "required": true
  },
  "value": {
    "type": "string",
    "required": true
  },
  "abbr": {
    "type": "string",
    "required": true
  },
  "offset": {
    "type": "integer",
    "required": true
  },
  "isdst": {
    "type": "string",
    "required": true
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}