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
  "company": {
    "model": "company",
    "required": true
  },
  "name": {
    "required": true,
    "type": "string",
    "unque": true,
    "displayName": true
  },
  "description": {
    "type": "string",
    "longtext": true
  }
}