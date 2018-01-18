module.exports = {
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
  "title": {
    "required": true,
    "type": "string"
  },
  "category": {
    "model": "category",
    "mustExist": true,
    "required": true
  },
  "layout": {
    "description": "Article layout",
    "required": true,
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "article"
    }
  },
  "content": {
    "description": "Article content.",
    "required": true,
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "article"
    }
  }
}