module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
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
  "description": {
    "description": "Template friendly name",
    "required": true,
    "type": "string",
    "displayName": true
  },
  "country": {
    "required": true,
    "type": "string"
  },
  "language": {
    "required": true,
    "type": "string"
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
      "report",
      "article",
      "content",
      "email",
      "system"
    ]
  },
  "body": {
    "description": "Body template",
    "type": "string",
    "required": true,
    "html": true
  },
  "html": {
    "description": "Rendered template example",
    "type": "string",
    "required": true,
    "html": true
  },
  "thumb": {
    "description": "Rendered template example",
    "type": "string",
    "required": true
  },
  "pdf": {
    "description": "Rendered PDF example",
    "type": "string",
    "required": true
  },
  "businessType": {
    "type": "string",
    "required": true
  }
}