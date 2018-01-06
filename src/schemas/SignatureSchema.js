module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "type": {
    "required": true,
    "type": "string",
    "enum": [
      "quote",
      "contract",
      "invoice"
    ]
  },
  "signatureId": {
    "required": true,
    "type": "string"
  },
  "fullName": {
    "required": true,
    "type": "string"
  },
  "title": {
    "type": "string"
  },
  "identificationNumber": {
    "type": "string"
  },
  "eSignature": {
    "required": true,
    "type": "string"
  },
  "headers": {
    "type": "json",
    "skipAll": true
  }
}