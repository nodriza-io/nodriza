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
  "name": {
    "type": "string",
    "displayName": true,
    "required": true
  },
  "description": {
    "type": "string"
  },
  "provider": {
    "description": "Company who provide this product",
    "model": "company",
    "required": true
  },
  "category": {
    "model": "category",
    "mustExist": true,
    "required": true
  },
  "unit": {
    "description": "Product unit of measure",
    "required": true,
    "type": "string",
    "enum": [
      "Hrs",
      "Quantity",
      "GB",
      "GB-Mo",
      "IOPS-Mo",
      "IOs",
      "LCU-Hrs",
      "Count",
      "Gbps-hrs"
    ]
  },
  "price": {
    "description": "Product Price",
    "type": "float",
    "currency": true,
    "defaultsTo": 0
  },
  "currency": {
    "required": true,
    "type": "string",
    "model": "currency"
  },
  "tax": {
    "model": "tax",
    "required": true
  },
  "SKU": {
    "description": "Unique Stock Keeping Unit Number",
    "unique": true,
    "random": 8,
    "required": true,
    "displayName": true,
    "type": "string"
  },
  "meta": {
    "type": "json",
    "skipAll": true
  }
}