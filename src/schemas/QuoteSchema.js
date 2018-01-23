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
  "quoteNumber": {
    "description": "Unique quote idetification number",
    "unique": true,
    "random": 8,
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
    "skipAll": true,
    "type": "string",
    "defaultsTo": "Draft",
    "enum": [
      "Draft",
      "Presented",
      "Negotiation",
      "Accepted",
      "Denied"
    ]
  },
  "layout": {
    "description": "Detailed quote proposal.",
    "required": true,
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "quote"
    }
  },
  "content": {
    "description": "Quote content.",
    "required": true,
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "quote"
    }
  },
  "products": {
    "description": "Add products to invoice",
    "productList": true,
    "type": "json",
    "defaultsTo": []
  },
  "currency": {
    "model": "currency"
  },
  "rating": {
    "description": "Quote scoring status",
    "type": "string",
    "enum": [
      "Hot",
      "Warm",
      "Cold"
    ]
  },
  "expirationDate": {
    "description": "Expiration date determines when the quote expires",
    "type": "datetime"
  },
  "relatedLead": {
    "description": "Select the lead that is related with this quote",
    "model": "lead",
    "mustExist": true
  },
  "relatedUser": {
    "description": "Select the user that is related with this quote",
    "model": "user",
    "mustExist": true
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
  "discount": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "exchangeRate": {
    "type": "float",
    "skipAll": true
  },
  "invoice": {
    "model": "invoice",
    "skipAll": true
  },
  "passwordProtected": {
    "type": "boolean",
    "defaultsTo": false
  },
  "password": {
    "type": "string",
    "password": true
  }
}