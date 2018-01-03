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
    "type": "string"
  },
  "title": {
    "required": true,
    "displayName": true,
    "type": "string"
  },
  "startDate": {
    "type": "datetime"
  },
  "endDate": {
    "type": "datetime"
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
  "contractResponsibles": {
    "description": "Users in charge of this contract",
    "type": "array",
    "multiple": "user"
  },
  "exchangeRate": {
    "type": "float",
    "skipAll": true
  }
}