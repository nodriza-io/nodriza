module.exports = {
  "loaderVersion": {
    "type": "string",
    "skipAll": true
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
  "keyname": {
    "required": true,
    "description": "Unique Helper Name",
    "unique": true,
    "primaryKey": true,
    "displayName": true,
    "type": "string"
  },
  "helper": {
    "description": "Handelbars Helper Function",
    "required": true,
    "type": "string",
    "longtext": "true",
    "helperEditor": true,
    "displayName": true
  },
  "usage": {
    "description": "Handelbars Helper Function",
    "required": true,
    "longtext": "true",
    "type": "string",
    "displayName": true
  },
  "type": {
    "description": "Model to Which it Belongs",
    "type": "string",
    "defaultsTo": "proposal",
    "enum": [
      "all",
      "proposal"
    ],
    "displayName": true
  }
}