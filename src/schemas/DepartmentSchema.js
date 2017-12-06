module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "name": {
    "description": "Department name",
    "example": "Management",
    "required": true,
    "type": "string",
    "unique": true,
    "displayName": true,
    "existCheck": true
  },
  "description": {
    "description": "Department description",
    "example": "People in charge of a certain group",
    "type": "string"
  },
  "active": {
    "description": "Department description",
    "example": "People in charge of a certain group",
    "type": "boolean",
    "defaultsTo": true
  },
  "guest": {
    "description": "Department description",
    "example": "People in charge of a certain group",
    "model": "user"
  },
  "expire": {
    "description": "Department description",
    "example": "People in charge of a certain group",
    "type": "datetime"
  }
}