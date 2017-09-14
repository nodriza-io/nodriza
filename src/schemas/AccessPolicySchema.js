module.exports = {
  "app": {
    "description": "Oauth authentication provider",
    "example": "594d4b5970abb08100bf5b71",
    "model": "app",
    "required": "true",
    "mustExist": true,
    "skipUpdate": true
  },
  "company": {
    "description": "Every user that match the policy will be asociated with this company and heritage the company role",
    "example": "59418bcd105605cc2693a981",
    "model": "company",
    "mustExist": true,
    "required": true,
    "skipUpdate": true
  },
  "policy": {
    "description": "Access policy to match -> full domain 'nodriza.io' or 'jprieto@nodriza.io' for a single user",
    "example": "nodriza.io",
    "type": "string",
    "required": true,
    "existCheck": true,
    "unique": true,
    "skipUpdate": true
  },
  "ip": {
    "description": "Limit access to IP",
    "example": "192.168.0.1",
    "type": "string",
    "ip": true
  },
  "accessTime": {
    "description": "Set access time rage",
    "example": {
      "from": 9,
      "to": 19
    },
    "type": "json",
    "hourRange": true
  },
  "id": {
    "type": "string",
    "autoIncrement": true,
    "primaryKey": true,
    "unique": true
  },
  "createdAt": {
    "type": "datetime",
    "default": "NOW"
  },
  "updatedAt": {
    "type": "datetime",
    "default": "NOW"
  }
}