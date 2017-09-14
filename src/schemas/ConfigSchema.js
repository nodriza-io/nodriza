module.exports = {
  "group": {
    "description": "You can set different config groups, by default everything goes to general",
    "example": "general",
    "type": "string",
    "defaultsTo": "general",
    "required": true,
    "skipUpdate": true
  },
  "description": {
    "description": "Config description",
    "example": "Set the number of uploads per user",
    "type": "string",
    "skipUpdate": true
  },
  "key": {
    "description": "Config key",
    "example": "fistName",
    "type": "string",
    "required": true,
    "skipUpdate": true
  },
  "value": {
    "description": "Value of key",
    "example": "Jhon",
    "type": "json"
  },
  "factorySettings": {
    "description": "Reset factory settings value",
    "example": "Jhon",
    "type": "json",
    "skipUpdate": true
  },
  "type": {
    "description": "Validate the variable type of 'val' field",
    "example": "boolean",
    "skipAll": true
  },
  "public": {
    "description": "Config can be exposed to public",
    "type": "boolean",
    "skipUpdate": true
  },
  "readOnly": {
    "description": "Config value is read only and can't be updated",
    "example": false,
    "type": "boolean",
    "skipUpdate": true
  }
}