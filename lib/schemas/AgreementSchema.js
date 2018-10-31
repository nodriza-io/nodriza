"use strict";

module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "fullName": {
    "required": true,
    "type": "string"
  },
  "identificationNumber": {
    "type": "string"
  },
  "signature": {
    "required": true,
    "type": "string"
  },
  "agreementDate": {
    "type": "datetime",
    "skipAll": true
  },
  "type": {
    "required": true,
    "type": "string",
    "enum": ["quote", "contract", "invoice"]
  },
  "agreementId": {
    "required": true,
    "unique": true,
    "type": "string"
  }
};