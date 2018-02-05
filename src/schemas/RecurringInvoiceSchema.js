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
    "required": true,
    "displayName": true,
    "type": "string"
  },
  "client": {
    "description": "Client who will receive the invoice",
    "required": true,
    "mustExist": true,
    "model": "company"
  },
  "layout": {
    "required": true,
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "invoice"
    }
  },
  "specialObservations": {
    "description": "Specify if the invoice has some special observation",
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "invoice"
    }
  },
  "invoiceDueDays": {
    "type": "integer",
    "defaultsTo": 30
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
    "description": "Add products to invoice",
    "productList": true,
    "type": "json",
    "defaultsTo": []
  },
  "currency": {
    "model": "currency",
    "noCreate": true
  },
  "paymentResponsibles": {
    "description": "Send notifications about this AWS Account payments to these users",
    "type": "array",
    "multiple": "user"
  },
  "recurrence": {
    "type": "array",
    "multiple": "cronPreset"
  },
  "crons": {
    "type": "json",
    "skipAll": true
  },
  "commissionAgent": {
    "model": "user"
  },
  "commissionRate": {
    "type": "float",
    "defaultsTo": 0
  },
  "commissionTax": {
    "model": "tax"
  },
  "commissionPoLayout": {
    "description": "Layout for commission purchase order",
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "purchaseOrder"
    }
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