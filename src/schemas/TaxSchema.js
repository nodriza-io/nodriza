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
  "taxName": {
    "description": "Tax name identifier",
    "example": "Tax-Free",
    "type": "string",
    "unique": true,
    "required": true
  },
  "description": {
    "description": "Tax description",
    "example": "Free tax item",
    "type": "string"
  },
  "percent": {
    "description": "Tax percent",
    "example": 0,
    "type": "float",
    "required": true
  }
}