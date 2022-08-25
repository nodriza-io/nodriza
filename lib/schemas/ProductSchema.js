"use strict";

module.exports = {
  "createdBy": {
    "required": true,
    "description": "User who created the resource",
    "model": "user",
    "skipAll": true
  },
  "updatedBy": {
    "required": true,
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
    "type": "float"
  },
  "minimunPrice": {
    "description": "Minimun Product Price",
    "type": "float"
  },
  "minimumOrderQuantity": {
    "description": "Minimun Product Order Quantity",
    "type": "float"
  },
  "maximumOrderQuantity": {
    "description": "Maximum Product Order Quantity",
    "type": "float"
  },
  "initialPrice": {
    "skipAll": true,
    "type": "float"
  },
  "initialCurrency": {
    "skipAll": true,
    "type": "string"
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
    "enum": ["Each", "Package", "Dozen", "Hr", "Day", "Mnt", "Mb", "Gb", "Kg", "Lb"]
  },
  "provider": {
    "description": "Provider for this product",
    "model": "provider"
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
  "group": {
    "model": "category"
  },
  "type": {
    "model": "category"
  },
  "hidePrice": {
    "type": "boolean",
    "defaultsTo": false
  },
  "disabled": {
    "type": "boolean",
    "defaultsTo": false
  },
  "partialPayment": {
    "type": "boolean",
    "skipAll": true
  },
  "color": {
    "type": "string",
    "color": true
  },
  "publicName": {
    "type": "string"
  },
  "source": {
    "type": "string"
  },
  "interval": {
    "type": "string",
    "enum": ["day", "week", "month", "year"]
  },
  "metadata": {
    "type": "json"
  }
};