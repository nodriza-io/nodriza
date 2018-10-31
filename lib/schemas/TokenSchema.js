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
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "provider": {
    "description": "Authentication provider",
    "example": "google",
    "required": true
  },
  "user": {
    "description": "User who own token",
    "required": true,
    "model": "user",
    "skipDependency": true
  },
  "accessToken": {
    "description": "Token in uuid format",
    "required": true,
    "type": "string"
  },
  "lastTimeAccessed": {
    "description": "Last time when the token where requested",
    "type": "datetime"
  },
  "expirationDate": {
    "description": "Token expiration date",
    "type": "datetime"
  },
  "headers": {
    "description": "Headers sent when the token has been created",
    "example": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2)",
    "type": "json"
  },
  "browser": {
    "description": "Browser detected when is send the headers",
    "example": "Chrome",
    "type": "string"
  },
  "os": {
    "description": "System operator detected when is send the headers",
    "example": "Linux",
    "type": "string"
  },
  "ip": {
    "description": "The device used in the request",
    "example": "192.168.0.234",
    "type": "string"
  },
  "description": {
    "description": "Token description",
    "example": "Api key from app",
    "type": "string"
  }
};