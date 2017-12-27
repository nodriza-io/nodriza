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
  "name": {
    "type": "string",
    "displayName": true,
    "required": true
  },
  "description": {
    "type": "string"
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
    "currency": true
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
  "meta": {
    "type": "json",
    "skipAll": true
  }
}