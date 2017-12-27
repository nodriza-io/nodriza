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
  "client": {
    "required": true,
    "model": "company"
  },
  "specialObservation": {
    "type": "string",
    "longText": true
  },
  "invoiceNumber": {
    "type": "string"
  },
  "usageReportId": {
    "model": "awsUsageReport",
    "skipAll": true
  },
  "dueDate": {
    "type": "datetime"
  },
  "status": {
    "type": "string",
    "defaultsTo": "draft",
    "enum": [
      "draft",
      "approved",
      "delivered",
      "partial",
      "paid",
      "cancelled",
      "refunded",
      "due"
    ]
  },
  "products": {
    "description": "Add products to invoice",
    "productList": true,
    "type": "array",
    "defaultsTo": []
  },
  "amountNet": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "tax": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "amountTotal": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "currency": {
    "required": true,
    "model": "currency"
  }
}