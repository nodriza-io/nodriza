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
  "invoiceNumber": {
    "description": "Unique invoice idetification number",
    "unique": true,
    "displayName": true,
    "type": "string"
  },
  "orderNumber": {
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
    "defaultsTo": "Draft",
    "skipAll": true,
    "enum": [
      "Draft",
      "Approved",
      "Partial",
      "Paid",
      "Cancelled",
      "Refunded"
    ]
  },
  "client": {
    "description": "Client who will receive the invoice",
    "required": true,
    "mustExist": true,
    "model": "company"
  },
  "layout": {
    "description": "Proposal template layout",
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
    "longtext": "true"
  },
  "issueDate": {
    "type": "datetime"
  },
  "dueDate": {
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
    "description": "Add products to invoice",
    "productList": true,
    "type": "json",
    "defaultsTo": []
  },
  "currency": {
    "model": "currency",
    "noCreate": true
  },
  "proposal": {
    "model": "proposal",
    "skipAll": true
  },
  "paymentResponsibles": {
    "type": "array",
    "multiple": "user"
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
  "commissionPo": {
    "model": "purchaseOrder",
    "skipAll": true
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
  },
  "paymentsReceived": {
    "skipAll": true,
    "type": "array",
    "defaultsTo": [],
    "sync": "paymentReceived.paidInvoices"
  },
  "reminders": {
    "type": "array",
    "skipAll": true
  }
}