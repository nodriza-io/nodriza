module.exports = {
  "name": {
    "description": "Chatbot name",
    "example": "Jane",
    "required": true,
    "type": "string",
    "unique": true,
    "displayName": true
  },
  "slug": {
    "description": "Unique slug identifier for URL. Only alphanumeric, dash and underscore allowed",
    "example": "jane",
    "required": true,
    "primaryKey": true,
    "unique": true,
    "type": "string",
    "regex": "/^([a-zA-Z0-9_-]+)$/"
  },
  "assignedAgents": {
    "description": "Users that are responsables for the proposals created by this bot",
    "type": "array",
    "required": true,
    "multiple": "user"
  },
  "nextAssignedAgent": {
    "description": "Next user who will create the proposal",
    "model": "user",
    "mustExist": true,
    "required": true
  },
  "selectAgentQuestion": {
    "type": "string",
    "description": "Select agent question text",
    "defaultsTo": "Please select the agent that you want to serve you:"
  },
  "chatbotHtml": {
    "description": "HTML Form",
    "type": "string",
    "defaultsTo": "",
    "html": true,
    "target": "template",
    "query": {
      "type": "articlebot"
    }
  },
  "inactive": {
    "description": "Deactivate bot",
    "type": "boolean"
  },
  "createdBy": {
    "description": "User who created the resource",
    "model": "user",
    "required": true,
    "skipAll": true
  },
  "updatedBy": {
    "description": "Last user who updated the resource",
    "model": "user",
    "required": true,
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
  "referenceNumber": {
    "unique": true,
    "displayName": true,
    "type": "string"
  },
  "title": {
    "required": true,
    "type": "string"
  },
  "layout": {
    "description": "Article layout",
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "article",
      "category": "layout"
    }
  },
  "content": {
    "description": "Article content.",
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "article",
      "category": "content"
    }
  },
  "relatedUser": {
    "description": "Select the user that is related with this article",
    "model": "user",
    "mustExist": true
  },
  "relatedLead": {
    "description": "Select the lead that is related with this article",
    "model": "lead",
    "mustExist": true
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
    "type": "long",
    "skipAll": true
  },
  "views": {
    "type": "integer",
    "skipAll": true
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
  },
  "pdfUrl": {
    "type": "string",
    "description": "Article PDF URL"
  }
}