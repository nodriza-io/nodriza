"use strict";

module.exports = {
  "createdBy": {
    "description": "User who created the resource",
    "model": "user",
    "required": true,
    "skipAll": true
  },
  "updatedBy": {
    "description": "Last user who updated the resource",
    "model": "user",
    "required": true,
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
  "name": {
    "required": true,
    "displayName": true,
    "type": "string",
    "description": "File name",
    "example": "ecs-black-wallpaper.jpg"
  },
  "fileType": {
    "required": true,
    "displayName": true,
    "type": "string",
    "description": "File type",
    "example": "image/jpeg"
  },
  "fileZise": {
    "required": true,
    "displayName": true,
    "type": "number",
    "description": "File size",
    "example": "26896"
  },
  "dataURL": {
    "required": true,
    "displayName": true,
    "type": "string",
    "description": "Base64 dataURL",
    "example": "data:image/jpeg;base64,/9j/4QAYRXh..."
  }
};