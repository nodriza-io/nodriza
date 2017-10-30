module.exports = {
  "location": {
    "description": "Friendly region name",
    "example": "US East (N. Virginia)",
    "displayName": true,
    "type": "string",
    "required": true,
    "unique": true
  },
  "regionName": {
    "description": "Region code name",
    "example": "us-east-1",
    "primaryKey": true,
    "type": "string",
    "displayName": true,
    "required": true,
    "unique": true
  },
  "country": {
    "description": "Region country code",
    "example": "US",
    "type": "string",
    "model": "country",
    "mustExist": true,
    "required": true
  },
  "GMT": {
    "description": "Region GMT offset",
    "example": -5,
    "type": "integer",
    "required": true
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}