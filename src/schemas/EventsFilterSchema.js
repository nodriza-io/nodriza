module.exports = {
  "user": {
    "description": "Related user",
    "model": "user",
    "required": true,
    "skipAll": true,
    "unique": true
  },
  "userInfo": {
    "description": "User Information",
    "type": "json",
    "skipAll": true,
    "required": true
  },
  "filter": {
    "description": "Notifications config",
    "type": "json",
    "skipAll": true,
    "required": true
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}