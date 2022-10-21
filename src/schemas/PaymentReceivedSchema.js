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
  "starred": {
    "skipAll": true,
    "type": "array"
  },
  "paymentNumber": {
    "description": "Unique idetification number",
    "required": true,
    "unique": true,
    "random": 6,
    "displayName": true,
    "type": "string"
  },
  "layout": {
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "paymentReceived",
      "category": "layout"
    }
  },
  "title": {
    "required": true,
    "displayName": true,
    "type": "string"
  },
  "client": {
    "model": "company",
    "required": true
  },
  "paymentMode": {
    "model": "paymentMode",
    "defaultsTo": {
      "keyname": "cash",
      "displayName": "Cash"
    },
    "required": true
  },
  "paymentDate": {
    "type": "datetime"
  },
  "paidInvoices": {
    "type": "array",
    "multiple": "invoice",
    "sync": "invoice.paymentsReceived"
  },
  "currency": {
    "model": "currency",
    "noCreate": true
  },
  "amount": {
    "type": "float",
    "defaultsTo": 0
  },
  "bankCharges": {
    "type": "float",
    "defaultsTo": 0
  },
  "total": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "paymentResponsibles": {
    "type": "array",
    "multiple": "user"
  },
  "transactionId": {
    "type": "string"
  },
  "meta": {
    "type": "json",
    "skipAll": true
  },
  "specialObservations": {
    "description": "Specify if the payment received has some special observation",
    "type": "string",
    "longtext": true
  },
  "signatures": {
    "description": "Array with the eSignatures IDs",
    "type": "array",
    "defaultsTo": [],
    "skipAll": true
  },
  "referenceNumber": {
    "unique": true,
    "displayName": true,
    "type": "string"
  }
}