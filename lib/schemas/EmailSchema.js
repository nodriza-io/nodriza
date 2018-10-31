"use strict";

module.exports = {
  "uuid": {
    "description": "Auto-generated unique email ID",
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "from": {
    "description": "Email sender",
    "example": "Nodriza <no-reply@nodriza.io>",
    "type": "string",
    "required": true
  },
  "to": {
    "description": "Email destinatary",
    "example": "jprieto@nodriza.io",
    "required": true,
    "type": "string",
    "regex": "/[\\w-\\-+.]{3,}@([\\w-]{2,}\\.)*([\\w-]{2,}\\.)[\\w-]{2,4}/"
  },
  "subject": {
    "description": "Email subject",
    "example": "Welcome to Nodriza",
    "required": true,
    "type": "string"
  },
  "template": {
    "description": "Template used to render email message",
    "example": "action",
    "type": "string",
    "model": "template",
    "skipUpdate": true,
    "mustExist": true
  },
  "html": {
    "description": "Body of the email message rendered",
    "required": true,
    "type": "string"
  },
  "status": {
    "description": "Email status",
    "required": true,
    "type": "string",
    "defaultsTo": "created",
    "enum": ["created", "error", "sent", "viewed"],
    "skipAll": true
  },
  "error": {
    "description": "Log error message if something went wrong",
    "skipAll": true,
    "type": "string"
  },
  "views": {
    "description": "Number of email views",
    "type": "array",
    "defaultsTo": [],
    "skipAll": true
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
};