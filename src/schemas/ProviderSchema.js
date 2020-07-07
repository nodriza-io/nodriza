module.exports = {
  "readOnly": {
    "skipAll": true,
    "type": "boolean"
  },
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
    "required": true,
    "model": "user",
    "skipAll": true
  },
  "updatedBy": {
    "description": "Last user who updated the resource",
    "required": true,
    "model": "user",
    "skipAll": true
  },
  "taxId": {
    "description": "Identification number used for tax purposes",
    "type": "string",
    "primaryKey": true,
    "required": true,
    "displayName": true,
    "unique": true
  },
  "name": {
    "description": "Provider friendly name",
    "example": "Acme",
    "required": true,
    "type": "string",
    "displayName": true
  },
  "shortname": {
    "description": "Unique shortname identifier. Only alphanumeric, dash and underscore allowed",
    "example": "acme-inc",
    "unique": true,
    "type": "string",
    "regex": "/^([a-z0-9_-]+)$/",
    "minLength": 2,
    "maxLength": 32,
    "skipAll": true,
    "existCheck": true
  },
  "legalName": {
    "description": "Full provider name used for legal and accounting issues",
    "example": "Acme Inc.",
    "type": "string"
  },
  "website": {
    "description": "Full provider website url",
    "example": "http://acme-inc.com",
    "type": "string"
  },
  "phone": {
    "description": "Phone number",
    "type": "string",
    "example": "+1 508-695-1212"
  },
  "map": {
    "description": "Google Maps Geo Location",
    "type": "json",
    "map": true,
    "skipAll": true,
    "example": {}
  },
  "address": {
    "description": "Google Maps address location",
    "type": "string",
    "skipAll": true,
    "address": true
  },
  "country": {
    "description": "Country name",
    "model": "country",
    "mustExist": true,
    "noCreate": true
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
  "referedBy": {
    "description": "The user who refered this provider",
    "model": "user"
  },
  "paymentResponsibles": {
    "type": "array",
    "multiple": "user"
  },
  "referenceNumber": {
    "unique": true,
    "type": "string"
  },
  "industry": {
    "description": "Business Industry",
    "required": false,
    "model": "category",
    "$filter": {
      "field": "type",
      "value": "Industry"
    }
  },
  "status": {
    "description": "Company Status",
    "required": false,
    "model": "category",
    "$filter": {
      "field": "type",
      "value": "Status"
    }
  },
  "specialObservations": {
    "description": "Specify if the proposal has some special observation",
    "type": "string",
    "longtext": "true"
  }
}