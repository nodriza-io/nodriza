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
  "grossPrice": {
    "description": "Product price multiplier",
    "required": true,
    "type": "float",
    "min": 0,
    "currency": true
  },
  "multiplier": {
    "description": "Price multiplier multiplies the gross product price as many times as you choose",
    "required": true,
    "type": "float",
    "min": 0
  },
  "price": {
    "description": "Product price is the results of multiply gross price and multiplier",
    "type": "float",
    "skipAll": true,
    "min": 0,
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
  "requirements": {
    "type": "json"
  },
  "meta": {
    "type": "json"
  }
}