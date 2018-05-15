module.exports = {
  "company": {
    "description": "Company name",
    "example": "jdoe@acme.com",
    "type": "string",
    "required": true
  },
  "domain": {
    "description": "Account subdomain -> e.g acme.nodriza.io",
    "example": "acme",
    "type": "string",
    "required": true,
    "unique": true,
    "regex": "/^[a-zA-Z0-9_-]*$/",
    "minLength": 2,
    "maxLength": 32,
    "existCheck": true,
    "skipUpdate": true
  },
  "size": {
    "description": "Number of employees in the company",
    "type": "string",
    "required": true,
    "enum": [
      "1-10",
      "51-200",
      "201-500",
      "501-1000",
      "11-50",
      "5000-10000",
      "1001-5000",
      "10000+"
    ]
  },
  "phone": {
    "description": "Phone number",
    "example": "57 1 6739407",
    "type": "string"
  },
  "address": {
    "description": "Company Address",
    "example": "2320 Alta St.",
    "required": true,
    "type": "string"
  },
  "city": {
    "description": "City name where the company is located",
    "example": "Los Angeles",
    "required": true,
    "type": "string"
  },
  "country": {
    "description": "Country code where the company is located",
    "example": "us",
    "required": true,
    "type": "string",
    "model": "country",
    "noCreate": true
  },
  "firstName": {
    "description": "First name",
    "example": "Jhon",
    "type": "string",
    "required": true
  },
  "lastName": {
    "description": "Last name",
    "example": "Doe",
    "type": "string",
    "required": true
  },
  "email": {
    "description": "Email address",
    "example": "jdoe@acme.com",
    "type": "email",
    "required": true,
    "unique": true,
    "regex": "/[\\w-\\-+.]{3,}@([\\w-]{2,}\\.)*([\\w-]{2,}\\.)[\\w-]{2,4}/",
    "existCheck": true
  },
  "password": {
    "description": "Email address",
    "example": "jdoe@acme.com",
    "required": true
  },
  "dbPassword": {
    "description": "Random generated mongo password",
    "example": "eMRr8NvpiDXbRjxC2dJ4MzE1yJCXt6WK",
    "type": "string",
    "skipAll": true
  },
  "hash": {
    "description": "Random generated hash string created by the system to encrypt everything",
    "example": "fe8uwwDngkQW7sNMkKzEZFYx8Epkyi7pZ6d39c2q9QlUnDaZ2AaD3zBqUzyI0q9H",
    "type": "string",
    "skipAll": true
  },
  "subscription": {
    "description": "Subscription type",
    "type": "string",
    "required": true,
    "defaultsTo": "trial",
    "skipAll": true
  },
  "status": {
    "description": "Current account subscription status",
    "type": "string",
    "enum": [
      "deployment",
      "active",
      "inactive",
      "deleted"
    ],
    "defaultsTo": "deployment",
    "skipAll": true
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}