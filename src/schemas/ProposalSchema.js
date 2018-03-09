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
  "layout": {
    "description": "Detailed proposal proposal.",
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "proposal",
      "category": "layout"
    }
  },
  "proposalNumber": {
    "description": "Unique proposal idetification number",
    "unique": true,
    "random": 6,
    "displayName": true,
    "type": "string"
  },
  "referenceNumber": {
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
    "required": true,
    "skipAll": true,
    "type": "string",
    "defaultsTo": "Draft",
    "enum": [
      "Draft",
      "Ready",
      "Negotiation",
      "Approved",
      "Denied"
    ]
  },
  "content": {
    "description": "Proposal content.",
    "required": true,
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "proposal",
      "category": "content"
    }
  },
  "products": {
    "description": "Add products to invoice",
    "productList": true,
    "type": "json",
    "defaultsTo": []
  },
  "numberOfPayments": {
    "type": "integer",
    "defaultsTo": 1,
    "min": 1
  },
  "currency": {
    "model": "currency",
    "noCreate": true
  },
  "rating": {
    "description": "Proposal scoring status",
    "type": "string",
    "enum": [
      "Hot",
      "Warm",
      "Cold"
    ]
  },
  "expirationDate": {
    "description": "Expiration date determines when the proposal expires",
    "type": "datetime"
  },
  "relatedUser": {
    "description": "Select the user that is related with this proposal",
    "model": "user",
    "mustExist": true
  },
  "relatedLead": {
    "description": "Select the lead that is related with this proposal",
    "model": "lead",
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
  "invoices": {
    "skipAll": true,
    "type": "array",
    "defaultsTo": []
  },
  "passwordProtected": {
    "type": "boolean",
    "defaultsTo": false
  },
  "password": {
    "type": "string",
    "password": true
  },
  "conferenceUrl": {
    "type": "string",
    "example": "https://hangouts.google.com/call/-x8KF7XdoUnTJDsDkaJgABEE",
    "labelAction": {
      "url": "https://hangouts.google.com/start",
      "text": "CREATE HANGOUTS"
    }
  },
  "starred": {
    "skipAll": true,
    "type": "array"
  },
  "opened": {
    "description": "How many views has the document has been opened",
    "type": "array",
    "defaultsTo": [],
    "skipAll": true
  },
  "viewsAlerts": {
    "description": "Number of alerts when client open the proposal",
    "type": "integer",
    "defaultsTo": 1,
    "min": 0,
    "max": 10
  }
}