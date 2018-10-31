"use strict";

module.exports = {
  "firstName": {
    "description": "User first name",
    "example": "John",
    "type": "string",
    "displayName": true,
    "notEmpty": true
  },
  "lastName": {
    "description": "User last name",
    "example": "Doe",
    "displayName": true,
    "type": "string"
  },
  "email": {
    "description": "User email",
    "example": "jdoe@acme.com",
    "required": true,
    "unique": true,
    "type": "string",
    "regex": "/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/",
    "existCheck": true
  },
  "companyName": {
    "required": true,
    "type": "string"
  },
  "companyShortname": {
    "required": true,
    "type": "string"
  },
  "plan": {
    "required": true,
    "model": "plan",
    "noCreate": true
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
};