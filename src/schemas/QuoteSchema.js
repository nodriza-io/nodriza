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
  "subject": {
    "required": true,
    "displayName": true,
    "type": "string"
  },
  "status": {
    "required": true,
    "type": "string",
    "defaultsTo": "In Review",
    "enum": [
      "Draft",
      "In Review",
      "Presented",
      "Acepted",
      "Denied"
    ]
  },
  "expirationDate": {
    "description": "Expiration date determines when the quote expires",
    "type": "datetime"
  },
  "thumb": {
    "description": "Quote thumbnail",
    "type": "string",
    "skipAll": true
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
  "exchangeRate": {
    "type": "float",
    "skipAll": true
  },
  "products": {
    "description": "Add products to invoice",
    "productList": true,
    "type": "json",
    "defaultsTo": []
  },
  "template": {
    "description": "Detailed quote proposal.",
    "required": true,
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "quotes"
    }
  }
}