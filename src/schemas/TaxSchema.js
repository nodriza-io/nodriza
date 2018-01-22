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
    "unique": true,
    "displayName": true
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