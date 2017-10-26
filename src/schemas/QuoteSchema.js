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
    "description": "Title about quote",
    "required": true,
    "type": "string"
  },
  "description": {
    "description": "Description about quote",
    "type": "string"
  },
  "fecha": {
    "description": "Description about quote",
    "required": true,
    "type": "datetime"
  }
}