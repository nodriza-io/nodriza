"use strict";

module.exports = {
  "type": {
    "required": true,
    "type": "string",
    "enum": ["invoice", "contract", "proposal", "paymentReceived", "article"]
  },
  "documentId": {
    "required": true,
    "type": "string"
  },
  "parent": {
    "model": "comment"
  },
  "name": {
    "description": "User full name",
    "example": "John Doe",
    "type": "string",
    "displayName": true
  },
  "email": {
    "description": "User email",
    "example": "jdoe@acme.com",
    "inputType": "email",
    "type": "string",
    "regex": "/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/"
  },
  "message": {
    "description": "Specify if the proposal has some special observation",
    "type": "string",
    "longtext": "true"
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
};