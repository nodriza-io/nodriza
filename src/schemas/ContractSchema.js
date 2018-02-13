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
  "contractNumber": {
    "description": "Unique contract idetification number",
    "unique": true,
    "random": 8,
    "displayName": true,
    "regex": "/^([a-z-A-Z-0-9_-]+)$/",
    "type": "string"
  },
  "status": {
    "required": true,
    "type": "string",
    "defaultsTo": "Draft",
    "enum": [
      "Draft",
      "Approved",
      "Canceled"
    ],
    "skipAll": true
  },
  "title": {
    "required": true,
    "displayName": true,
    "type": "string"
  },
  "layout": {
    "description": "Contract template",
    "required": true,
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "contract"
    }
  },
  "content": {
    "description": "Contract content",
    "required": true,
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "contract"
    }
  },
  "effectiveDate": {
    "type": "datetime"
  },
  "expirationDate": {
    "type": "datetime"
  },
  "firstProfile": {
    "model": "user"
  },
  "secondProfile": {
    "model": "user"
  },
  "thirdProfile": {
    "model": "user"
  },
  "fourthProfile": {
    "model": "user"
  },
  "passwordProtected": {
    "type": "boolean",
    "defaultsTo": false
  },
  "password": {
    "type": "string",
    "password": true
  },
  "starred": {
    "skipAll": true,
    "type": "array"
  },
  "amount": {
    "type": "integer"
  }
}