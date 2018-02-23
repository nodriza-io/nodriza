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
  "layout": {
    "description": "Contract template",
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "contract",
      "category": "layout"
    }
  },
  "contractNumber": {
    "description": "Unique contract idetification number",
    "unique": true,
    "random": 6,
    "displayName": true,
    "type": "string"
  },
  "referenceNumber": {
    "unique": true,
    "displayName": true,
    "type": "string"
  },
  "status": {
    "required": true,
    "type": "string",
    "defaultsTo": "Draft",
    "enum": [
      "Draft",
      "Approved",
      "Cancelled"
    ],
    "skipAll": true
  },
  "title": {
    "required": true,
    "displayName": true,
    "type": "string"
  },
  "content": {
    "description": "Contract content",
    "required": true,
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "contract",
      "category": "content"
    }
  },
  "effectiveDate": {
    "type": "datetime"
  },
  "expirationDate": {
    "type": "datetime"
  },
  "amount": {
    "type": "float"
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
  }
}