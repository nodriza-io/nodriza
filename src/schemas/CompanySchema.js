module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
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
  "type": {
    "description": "Company type",
    "example": "host",
    "required": true,
    "type": "string",
    "defaultsTo": "client",
    "enum": [
      "host",
      "client",
      "partner",
      "provider"
    ]
  },
  "name": {
    "description": "Company friendly name",
    "example": "Acme",
    "required": true,
    "type": "string",
    "displayName": true
  },
  "shortname": {
    "description": "Unique shortname identifier. Only alphanumeric, dash and underscore allowed",
    "example": "acme-inc",
    "required": true,
    "unique": true,
    "type": "string",
    "regex": "/^([a-z0-9_-]+)$/",
    "minLength": 2,
    "maxLength": 32,
    "skipUpdate": true,
    "existCheck": true
  },
  "legalName": {
    "description": "Full company name used for legal and accounting issues",
    "example": "Acme Inc.",
    "type": "string"
  },
  "website": {
    "description": "Full company website url",
    "example": "http://acme-inc.com",
    "type": "string"
  },
  "phone": {
    "description": "Phone number",
    "type": "string",
    "example": "+1 508-695-1212"
  },
  "referedBy": {
    "description": "The user who refered this company as client",
    "model": "user",
    "mustExist": true
  },
  "logos": {
    "description": "Company logo",
    "type": "json",
    "skipAll": true
  },
  "taxId": {
    "description": "Identification number used for tax purposes",
    "type": "string"
  },
  "map": {
    "description": "Google Maps Geo Location",
    "type": "json",
    "map": true,
    "example": {}
  },
  "address": {
    "description": "Google Maps address location",
    "type": "string",
    "address": true
  },
  "country": {
    "description": "Country name",
    "model": "country",
    "mustExist": true
  },
  "city": {
    "description": "City name",
    "example": "Los Angeles",
    "type": "string"
  },
  "street": {
    "description": "Street name",
    "example": "2719 Hyperion Ave",
    "type": "string"
  },
  "state": {
    "description": "State name",
    "example": "CA",
    "type": "string"
  },
  "postal": {
    "description": "Postal Code",
    "type": "string",
    "example": "90027"
  },
  "description": {
    "description": "Short company description",
    "type": "string",
    "longtext": true,
    "example": "Acme Inc. is a fully-funded start-up that provides cloud-based management of product data to retailers."
  }
}