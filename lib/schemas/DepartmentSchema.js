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
  "name": {
    "description": "Department name",
    "example": "Management",
    "required": true,
    "type": "string",
    "unique": true,
    "displayName": true,
    "existCheck": true
  },
  "description": {
    "description": "Department description",
    "example": "People in charge of a certain group",
    "type": "string"
  }
};