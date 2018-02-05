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
    "required": true
  },
  "currency": {
    "required": true,
    "type": "string",
    "model": "currency",
    "noCreate": true
  },
  "tax": {
    "model": "tax",
    "required": true
  },
  "sku": {
    "description": "Unique Stock Keeping Unit Number",
    "unique": true,
    "random": 8,
    "required": true,
    "displayName": true,
    "type": "string"
  },
  "provider": {
    "description": "Company who provide this product",
    "model": "company"
  }
}