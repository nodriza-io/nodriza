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
  "invoicesPaid": {
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
  "paymentNumber": {
    "description": "Unique quote idetification number",
    "unique": true,
    "random": 8,
    "displayName": true,
    "type": "string"
  },
  "paymentResponsibles": {
    "type": "array",
    "multiple": "user"
  },
  "transactionId": {
    "displayName": true,
    "type": "string"
  },
  "meta": {
    "type": "json"
  }
}