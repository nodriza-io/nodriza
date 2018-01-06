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
    "defaultsTo": "lzMpHqlu",
    "displayName": true,
    "type": "string"
  },
  "title": {
    "required": true,
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
  "amount": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "tax": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "total": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "firstProfile": {
    "model": "user"
  },
  "secondProfile": {
    "model": "user"
  }
}