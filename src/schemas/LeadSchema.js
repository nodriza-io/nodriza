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
    "skipAll": true
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
  }
}