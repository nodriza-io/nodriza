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
  "PoNumber": {
    "description": "Unique PO idetification number",
    "unique": true,
    "displayName": true,
    "type": "string"
  },
  "title": {
    "required": true,
    "displayName": true,
    "type": "string"
  },
  "status": {
    "type": "string",
    "defaultsTo": "Hold",
    "skipAll": true,
    "enum": [
      "Hold",
      "Approved",
      "Canceled",
      "Billed"
    ]
  },
  "vendor": {
    "description": "Provider or partner who will provide the service or recieve the commission",
    "required": true,
    "mustExist": true,
    "model": "company"
  },
  "layout": {
    "description": "Purchase Order Layout",
    "required": true,
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "purchaseOrder"
    }
  },
  "specialObservations": {
    "description": "Specify if the PO has some special observation",
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "purchaseOrder"
    }
  },
  "issueDate": {
    "type": "datetime"
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
  "discount": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "total": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "exchangeRate": {
    "type": "float",
    "skipAll": true
  },
  "products": {
    "description": "Add products to PO",
    "productList": true,
    "type": "json",
    "defaultsTo": []
  },
  "currency": {
    "model": "currency"
  },
  "invoiceCommission": {
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