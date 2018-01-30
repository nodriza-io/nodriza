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
    "required": true
  },
  "issueDate": {
    "type": "datetime"
  },
  "layout": {
    "required": true,
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "paymentReceived"
    }
  },
  "paidInvoices": {
    "type": "array",
    "multiple": "invoice"
  },
  "currency": {
    "model": "currency",
    "required": true
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
  "paymentNumber": {
    "description": "Unique quote idetification number",
    "unique": true,
    "random": 8,
    "displayName": true,
    "type": "string",
    "regex": "/^([a-z-A-Z-0-9_-]+)$/"
  },
  "transactionId": {
    "displayName": true,
    "type": "string"
  },
  "specialObservations": {
    "description": "Specify if the payment received has some special observation",
    "type": "string",
    "longtext": true
  }
}