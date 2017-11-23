module.exports = {
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
    "model": "company",
    "required": true
  },
  "description": {
    "type": "string"
  }
}