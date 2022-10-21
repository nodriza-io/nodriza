module.exports = {
  "readOnly": {
    "skipAll": true,
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
  "taxName": {
    "description": "Tax name identifier",
    "example": "Tax-Free",
    "required": true,
    "type": "string",
    "displayName": true
  },
  "slug": {
    "description": "Unique slug identifier. Only alphanumeric, dash and underscore allowed",
    "example": "pets",
    "required": true,
    "primaryKey": true,
    "unique": true,
    "type": "string",
    "regex": "/^([a-zA-Z0-9_-]+)$/"
  },
  "description": {
    "description": "Tax description",
    "example": "Free tax item",
    "type": "string",
    "longtext": true
  },
  "rate": {
    "description": "Tax Rate",
    "example": 0,
    "required": true,
    "min": -100,
    "max": 100,
    "type": "float"
  }
}