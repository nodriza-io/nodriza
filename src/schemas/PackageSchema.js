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
  "keyname": {
    "required": true,
    "unique": true,
    "primaryKey": true,
    "random": 8,
    "displayName": true,
    "type": "string"
  },
  "name": {
    "required": true,
    "type": "string",
    "displayName": true
  },
  "description": {
    "type": "string",
    "longtext": "true"
  },
  "products": {
    "description": "Add products to package",
    "productList": true,
    "type": "json",
    "defaultsTo": []
  },
  "fixed": {
    "type": "boolean",
    "defaultsTo": true
  },
  "color": {
    "type": "string",
    "color": true,
    "defaultsTo": "#EEEEEE"
  },
  "snippet": {
    "model": "snippet",
    "mustExist": true
  },
  "disabled": {
    "type": "boolean",
    "defaultsTo": false
  }
}