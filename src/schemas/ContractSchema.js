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
    "defaultsTo": "1EF7RQ0K",
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
      "Canceled"
    ]
  },
  "title": {
    "required": true,
    "displayName": true,
    "type": "string"
  },
  "effectiveDate": {
    "type": "datetime"
  },
  "expirationDate": {
    "type": "datetime"
  },
  "template": {
    "description": "Contract template",
    "required": true,
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "contract"
    }
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
  }
}