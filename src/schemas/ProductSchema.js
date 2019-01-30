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
  "sku": {
    "required": true,
    "description": "Unique Stock Keeping Unit Number",
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
  "price": {
    "required": true,
    "description": "Product Price",
    "type": "float",
    "currency": true
  },
  "minimunPrice": {
    "description": "Minimun Product Price",
    "type": "float",
    "currency": true
  },
  "currency": {
    "type": "string",
    "model": "currency",
    "noCreate": true
  },
  "tax": {
    "model": "tax",
    "mustExist": true
  },
  "unit": {
    "description": "Product unit of measure",
    "type": "string",
    "defaultsTo": "Each",
    "enum": [
      "Each",
      "Package",
      "Dozen",
      "Hr",
      "Day",
      "Mnt",
      "Mb",
      "Gb",
      "Kg",
      "Lb"
    ]
  },
  "vendor": {
    "description": "Company who provide this product",
    "model": "company"
  },
  "photo": {
    "type": "string",
    "description": "Product photo URL",
    "thumbnail": true
  },
  "snippet": {
    "model": "snippet"
  },
  "category": {
    "model": "category"
  },
  "pricingList": {
    "model": "category"
  },
  "disabled": {
    "type": "boolean",
    "defaultsTo": false
  },
  "partialPayment": {
    "type": "boolean",
    "skipAll": true
  }
}