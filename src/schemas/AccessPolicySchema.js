module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "policy": {
    "description": "Allow access from this domain/email",
    "example": "acme.com (Full Domain) or jdoe@acme.inc (Single user)",
    "displayName": true,
    "required": true,
    "emailOrDomain": true,
    "type": "string",
    "existCheck": true,
    "unique": true
  },
  "app": {
    "required": "true",
    "description": "Authentication provider",
    "example": "594d4b5970abb08100bf5b71",
    "model": "app",
    "mustExist": true
  },
  "company": {
    "description": "Logged users that match the email/domain policy will be associated with this company and heritage the company type/role",
    "example": "59418bcd105605cc2693a981",
    "model": "company",
    "required": true,
    "mustExist": true
  },
  "ip": {
    "description": "Restrict access by IP or IP Range",
    "example": [
      "192.168.0.10-192.168.0.100",
      "192.168.0.101"
    ],
    "type": "array",
    "ip": true
  },
  "startingHour": {
    "description": "Allow access after this hour of the day",
    "example": "9:00:00",
    "type": "string",
    "hour": true
  },
  "endingHour": {
    "description": "Deny access after this hour of the day",
    "example": "19:00:00",
    "type": "string",
    "hour": true
  }
}