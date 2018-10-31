"use strict";

module.exports = {
  "proposalNumber": {
    "description": "Unique proposal idetification number",
    "required": true,
    "unique": true,
    "random": 6,
    "displayName": true,
    "type": "string"
  },
  "dic": {
    "description": "Proposal dictionary for dictionary wildcards",
    "type": "json",
    "skipAll": true
  },
  "createdBy": {
    "required": true,
    "description": "User who created the resource",
    "model": "user",
    "skipAll": true
  },
  "updatedBy": {
    "required": true,
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
  "statusUpdatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "layout": {
    "description": "Proposal layout.",
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "proposal",
      "category": "layout"
    }
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
    "enum": ["Draft", "Pending Authorization", "Authorized", "Ready", "Approved", "Denied"]
  },
  "content": {
    "description": "Proposal content.",
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
    "type": "json",
    "defaultsTo": 1,
    "payments": true
  },
  "currency": {
    "model": "currency",
    "noCreate": true
  },
  "rating": {
    "description": "Proposal scoring status",
    "type": "string",
    "enum": ["Hot", "Warm", "Cold"]
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
  "viewsAlerts": {
    "description": "Number of alerts when client open the proposal",
    "type": "integer",
    "defaultsTo": 5,
    "min": 0,
    "max": 10
  },
  "alsoNotifyViewsTo": {
    "description": "Also notify these users when someone is watching the proposal",
    "type": "array",
    "multiple": "user"
  },
  "starred": {
    "skipAll": true,
    "type": "array"
  },
  "lastSeen": {
    "type": "datetime",
    "skipAll": true
  },
  "avgTime": {
    "type": "float",
    "skipAll": true
  },
  "views": {
    "type": "integer",
    "skipAll": true
  },
  "opened": {
    "description": "Full info about document views",
    "type": "array",
    "defaultsTo": [],
    "skipAll": true
  },
  "signatures": {
    "description": "Array with the eSignatures IDs",
    "type": "array",
    "defaultsTo": [],
    "skipAll": true
  },
  "proposalVersion": {
    "skipAll": true,
    "description": "Proposal version id",
    "type": "string"
  },
  "versions": {
    "skipAll": true,
    "description": "Proposal versions",
    "type": "array"
  },
  "unpublishProposal": {
    "description": "Proposal won't be available after this date",
    "type": "datetime"
  },
  "referenceNumber": {
    "unique": true,
    "displayName": true,
    "type": "string"
  },
  "source": {
    "description": "Name of API where the document has been created programmatically",
    "type": "string"
  }
};