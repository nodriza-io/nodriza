module.exports = {
  "code": {
    "required": true,
    "displayName": true,
    "type": "string"
  },
  "region": {
    "required": true,
    "mustExist": true,
    "model": "region"
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}