module.exports = {
  "app": {
    "description": "Authentication provider",
    "example": "594d4b5970abb08100bf5b71",
    "model": "app",
    "required": "true",
    "mustExist": true
  },
  "company": {
    "description": "Every user that match this policy will be associated with this company and heritage the company type",
    "example": "59418bcd105605cc2693a981",
    "model": "company",
    "mustExist": true,
    "required": true
  },
  "policy": {
    "description": "Domain or email access policy rule",
    "example": "acme.com (Full Domain) or jdoe@acme.inc (Single user)",
    "displayName": true,
    "emailOrDomain": true,
    "type": "string",
    "required": true,
    "existCheck": true,
    "unique": true
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
    "description": "Access permitted after this hour of the day",
    "example": "9:00",
    "type": "string",
    "hour": true
  },
  "endingHour": {
    "description": "Access denied after this hour of the day",
    "example": "19:00",
    "type": "string",
    "hour": true
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}