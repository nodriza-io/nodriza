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
    "description": "Unique Stock Keeping Unit Number",
    "unique": true,
    "random": 8,
    "required": true,
    "displayName": true,
    "type": "string"
  },
  "name": {
    "type": "string",
    "displayName": true,
    "required": true
  },
  "description": {
    "type": "string",
    "longtext": "true"
  },
  "price": {
    "description": "Product Price",
    "type": "float",
    "currency": true,
    "required": true
  },
  "currency": {
    "type": "string",
    "model": "currency",
    "noCreate": true
  },
  "tax": {
    "model": "tax"
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
  "category": {
    "model": "category"
  },
  "vendor": {
    "description": "Company who provide this product",
    "model": "company"
  }
}