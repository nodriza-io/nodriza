module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
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
  "title": {
    "description": "Template friendly name",
    "required": true,
    "type": "string",
    "displayName": true
  },
  "keyname": {
    "description": "Unique keyname identifier. Only alphanumeric, dash and underscore allowed",
    "required": true,
    "type": "string",
    "primaryKey": true,
    "unique": true,
    "maxLength": 256,
    "regex": "/^([a-zA-Z0-9_-]+)$/"
  },
  "type": {
    "required": true,
    "type": "string",
    "enum": [
      "invoice",
      "contract",
      "proposal",
      "purchaseOrder",
      "paymentReceived",
      "article",
      "content",
      "email",
      "system",
      "report",
      "proposalbot",
      "articlebot",
      "contractbot",
      "invoicebot",
      "snippet",
      "template"
    ]
  },
  "body": {
    "description": "Body template",
    "type": "string",
    "required": true,
    "html": true
  },
  "category": {
    "type": "string",
    "enum": [
      "layout",
      "content",
      "html"
    ],
    "required": true
  }
}