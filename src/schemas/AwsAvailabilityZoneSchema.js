module.exports = {
  "location": {
    "description": "Friendly AWS Region name",
    "example": "US East (N. Virginia)",
    "required": true,
    "type": "string",
    "displayName": true
  },
  "zoneName": {
    "description": "Zone name indentificator",
    "example": "us-east-1a",
    "required": true,
    "displayName": true,
    "primaryKey": true,
    "type": "string"
  },
  "state": {
    "description": "Current state of availability zone",
    "example": "available",
    "required": true,
    "type": "string",
    "enum": [
      "available",
      "unavailable"
    ]
  },
  "regionName": {
    "description": "Full AWS Region model relation",
    "example": "us-east-1",
    "required": true,
    "mustExist": true,
    "model": "awsRegion",
    "noCreate": true
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}