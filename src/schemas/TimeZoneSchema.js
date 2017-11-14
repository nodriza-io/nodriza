module.exports = {
  "text": {
    "description": "Full time zone description",
    "example": "America/Bogota",
    "type": "string",
    "required": true
  },
  "utc": {
    "description": "Time zone friendly name",
    "example": "America/Bogota",
    "type": "string",
    "required": true,
    "displayName": true
  },
  "value": {
    "description": "Time zone standard identificator",
    "example": "SA Pacific Standard Time",
    "type": "string",
    "required": true,
    "primaryKey": true
  },
  "abbr": {
    "description": "Time zone abbreviation",
    "example": "U",
    "type": "string",
    "required": true
  },
  "offset": {
    "type": "integer",
    "required": true,
    "displayName": true
  },
  "isdst": {
    "type": "boolean",
    "required": true
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}