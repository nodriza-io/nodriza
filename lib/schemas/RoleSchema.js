"use strict";

module.exports = {
  "createdBy": {
    "description": "User who created the resource",
    "model": "user",
    "skipAll": true
  },
  "updatedBy": {
    "description": "Last user who updated the resource",
    "model": "user",
    "skipAll": true
  },
  "oem": {
    "description": "Essential data required by platform",
    "example": false,
    "required": true,
    "type": "boolean",
    "defaultsTo": true
  },
  "displayName": {
    "description": "Friendly role name identifier",
    "example": "Support",
    "required": true,
    "type": "string",
    "displayName": true
  },
  "keyname": {
    "description": "Unique keyname identifier",
    "example": "support",
    "required": true,
    "type": "string",
    "alphalowerDash": true,
    "unique": true,
    "primaryKey": true,
    "existCheck": true
  },
  "description": {
    "description": "Full role description",
    "example": "Enable access to basic system features and full access to support center module",
    "type": "string"
  },
  "permission": {
    "description": "Role permissions",
    "collection": "permission",
    "via": "role",
    "skipAll": true
  },
  "user": {
    "description": "Users who has this role",
    "collection": "user",
    "via": "role",
    "skipAll": true
  },
  "home": {
    "description": "View route that will be inherited by the user only if not set",
    "example": "/app",
    "defaultsTo": "/app",
    "type": "string"
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
};