module.exports = {
  "code": {
    "required": true,
    "type": "string",
    "primaryKey": true,
    "mustExist": true,
    "skipAll": true,
    "displayName": true
  },
  "name": {
    "required": true,
    "type": "string",
    "skipAll": true,
    "displayName": true
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}