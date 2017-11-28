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
    "unique": true,
    "displayName": true
  },
  "description": {
    "type": "string",
    "longtext": true
  },
  "supportHours": {
    "model": "product"
  },
  "numberOfSupportHours": {
    "min": 0,
    "defaultsTo": 0,
    "type": "float"
  },
  "plan": {
    "collection": "plan",
    "via": "costCenter",
    "skipAll": true
  }
}