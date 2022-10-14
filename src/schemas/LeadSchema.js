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
  "status": {
    "description": "Status of lead",
    "example": "Open",
    "type": "string",
    "enum": [
      "Open",
      "Attempting",
      "Working",
      "Converted",
      "Disqualified"
    ],
    "defaultsTo": "Open",
    "skipAll": true
  },
  "firstName": {
    "required": true,
    "description": "User first name",
    "example": "John",
    "type": "string",
    "displayName": true,
    "notEmpty": true
  },
  "lastName": {
    "description": "User last name",
    "example": "Doe",
    "displayName": true,
    "type": "string"
  },
  "email": {
    "description": "User email",
    "example": "jdoe@acme.com",
    "required": true,
    "unique": true,
    "inputType": "email",
    "type": "string",
    "regex": "/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim",
    "existCheck": true
  },
  "companyName": {
    "displayName": true,
    "description": "Company friendly name",
    "example": "Acme",
    "type": "string"
  },
  "taxId": {
    "description": "Company tax id",
    "example": "111111111",
    "type": "string"
  },
  "department": {
    "description": "Company department where the user belongs",
    "example": "5940200e93e326e90c636826",
    "model": "department",
    "mustExist": true,
    "required": false,
    "defaultsTo": "Unassigned"
  },
  "mobile": {
    "description": "User mobile number",
    "example": "57 311 521 3448",
    "type": "string"
  },
  "phone": {
    "description": "Phone number",
    "type": "string",
    "example": "+1 508-695-1212"
  },
  "website": {
    "description": "Full company website url",
    "example": "http://acme-inc.com",
    "type": "string"
  },
  "position": {
    "description": "Company user position",
    "example": "Sales Manager",
    "type": "string"
  },
  "starred": {
    "skipAll": true,
    "type": "array"
  },
  "avatars": {
    "description": "User avatar in different sizes",
    "type": "json",
    "skipAll": true
  },
  "logos": {
    "description": "Company logo",
    "type": "json",
    "skipAll": true
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
  "industry": {
    "description": "Company industry type",
    "example": "Computer Networking",
    "type": "string"
  },
  "source": {
    "description": "Company where the lead belongs",
    "type": "string"
  },
  "rating": {
    "description": "Proposal scoring status",
    "type": "string",
    "enum": [
      "Hot",
      "Warm",
      "Cold"
    ]
  },
  "referedBy": {
    "description": "The user who refered this company as client",
    "model": "user"
  },
  "assignedTo": {
    "description": "Assign record to a user",
    "example": "59418bcd105605cc2693a981",
    "model": "user"
  },
  "convertedUser": {
    "model": "user"
  },
  "convertedCompany": {
    "model": "company"
  },
  "specialObservations": {
    "description": "Specify if the lead has some special observation",
    "type": "string",
    "longtext": "true"
  },
  "referenceNumber": {
    "unique": true,
    "type": "string"
  },
  "shareWith": {
    "description": "Share With",
    "type": "array",
    "multiple": "user"
  },
  "company": {
    "description": "Company where the lead belongs",
    "example": "59418bcd105605cc2693a981",
    "model": "company",
    "mustExist": true,
    "skipAll": true
  },
  "identificationNumber": {
    "description": "User identificationNumber number",
    "example": "80103085",
    "type": "string"
  },
  "role": {
    "description": "User to roles association",
    "collection": "role",
    "via": "user",
    "skipAll": true
  },
  "permission": {
    "description": "User to permission association",
    "collection": "permission",
    "via": "user",
    "skipAll": true
  },
  "auth": {
    "description": "Authentication type",
    "example": "local",
    "defaultsTo": "local",
    "enum": [
      "local",
      "oauth"
    ],
    "skipAll": true
  },
  "resetPassword": {
    "description": "Token to reset user password",
    "type": "json",
    "skipSearch": true,
    "skipAll": true
  },
  "apps": {
    "description": "OAuth apps with accessTokens",
    "example": {
      "google": {
        "accessToken": "ya29.Glx0BB1aXg0ZvNMdriWMUHAoUTTcJODKKCyEvyMpn8skBfzFGgI_0Q4KKUZK7qXWgZiOw0fxy306ZoGwWCE5YLastKORAFNPx33gFZV6Tg32KzEDttcqm79Du0Pc0Q"
      }
    },
    "defaultsTo": {},
    "type": "json",
    "skipAll": true
  },
  "home": {
    "description": "View route to redirect user after successful login, this route is inherited from first role assigned",
    "example": "/dashboard",
    "type": "string",
    "skipAll": true
  },
  "password": {
    "description": "At least 1 numeric charter, 1 lowercase, 1 uppercase, min len 8 length",
    "example": "Shox009_",
    "type": "string",
    "skipUpdate": true
  },
  "skype": {
    "description": "Skype username",
    "example": "jdoe",
    "type": "string"
  },
  "metadata": {
    "description": "Extent of lead document",
    "type": "json"
  },
  "readOnly": {
    "skipAll": true,
    "type": "boolean"
  },
  "type": {
    "description": "Company type",
    "example": "host",
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
    "type": "string"
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
    "description": "Full company name used for legal and accounting issues",
    "example": "Acme Inc.",
    "type": "string"
  },
  "paymentResponsibles": {
    "type": "array",
    "multiple": "user"
  },
  "size": {
    "description": "Company Size",
    "required": false,
    "type": "float"
  },
  "renewalDate": {
    "description": "Open field for dates",
    "type": "datetime"
  },
  "renewalAmount": {
    "description": "Open field for number",
    "type": "float"
  },
  "converted": {
    "description": "True or False if lead has been converted",
    "example": "false",
    "type": "boolean",
    "defaultsTo": false,
    "skipAll": true
  },
  "companyShortname": {
    "description": "Unique shortname identifier. Only alphanumeric, dash and underscore allowed",
    "example": "acme-inc",
    "type": "string",
    "regex": "/^([a-z0-9_-]+)$/",
    "minLength": 2,
    "maxLength": 32
  },
  "user": {
    "description": "User where the lead belongs",
    "example": "59418bcd105605cc2693a981",
    "model": "user",
    "mustExist": true,
    "skipAll": true
  }
}