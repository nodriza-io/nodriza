module.exports = {
  "app": {
    "description": "Oauth authentication provider",
    "example": "594d4b5970abb08100bf5b71",
    "model": "app",
    "required": "true",
    "mustExist": true
  },
  "company": {
    "description": "Every user that match the policy will be asociated with this company and heritage the company role",
    "example": "59418bcd105605cc2693a981",
    "model": "company",
    "mustExist": true,
    "required": true
  },
  "policy": {
    "description": "Access policy to match -> full domain 'nodriza.io' or 'jprieto@nodriza.io' for a single user",
    "example": "nodriza.io",
    "type": "string",
    "required": true,
    "existCheck": true,
    "unique": true
  },
  "ip": {
    "description": "Restrict Site Access by IP or IP Range",
    "example": [
      "192.168.0.10-192.168.0.100",
      "192.168.0.101"
    ],
    "type": "string",
    "ip": true
  },
  "accessTime": {
    "description": "Allow user access only in specific hours of the day",
    "example": {
      "from": 9,
      "to": 19
    },
    "type": "json",
    "hourRange": true
  }
}