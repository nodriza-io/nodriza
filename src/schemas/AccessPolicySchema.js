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
    "example": "acme.com or jdoe@acme.inc",
    "type": "string",
    "required": true,
    "existCheck": true,
    "unique": true
  },
  "ip": {
    "description": "Restrict user access by IP or IP Range",
    "example": [
      "192.168.0.10-192.168.0.100",
      "192.168.0.101"
    ],
    "type": "array",
    "ip": true
  },
  "accessTimeStart": {
    "description": "Access permitted after this hour of the day",
    "example": 9,
    "type": "integer",
    "hour": true,
    "enum": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  "accessTimeEnd": {
    "description": "Access denied after this hour of the day",
    "example": 19,
    "type": "integer",
    "hour": true,
    "enum": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  }
}