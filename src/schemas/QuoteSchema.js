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
  "subject": {
    "required": true,
    "displayName": true,
    "type": "string"
  },
  "proposal": {
    "description": "Detailed quote proposal.",
    "required": true,
    "type": "string",
    "html": true
  },
  "status": {
    "required": true,
    "type": "string",
    "enum": [
      "Draft",
      "In Review",
      "Presented",
      "Acepted",
      "Denied"
    ]
  },
  "expirationDate": {
    "description": "Expiration date determines when the quote expires",
    "type": "datetime"
  },
  "sharing": {
    "description": "Public quotes can be access by users who has the link",
    "required": true,
    "type": "string",
    "enum": [
      "Public",
      "Private"
    ],
    "defaultsTo": "Public"
  },
  "thumb": {
    "description": "Quote thumbnail",
    "type": "string",
    "skipAll": true
  },
  "pdf": {
    "description": "Quote in PDF Format",
    "type": "string",
    "skipAll": true
  },
  "views": {
    "description": "Number of quote views",
    "type": "array",
    "skipAll": true
  },
  "relatedLead": {
    "description": "Select the lead that is related with this quote",
    "model": "lead",
    "mustExist": true
  },
  "relatedUser": {
    "description": "Select the user that is related with this quote",
    "model": "user",
    "mustExist": true
  }
}