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
  "firstName": {
    "description": "User first name",
    "example": "Juan",
    "type": "string",
    "displayName": true,
    "notEmpty": true
  },
  "lastName": {
    "description": "User last name",
    "example": "Prieto",
    "displayName": true,
    "type": "string"
  },
  "email": {
    "description": "User email",
    "example": "jprieto@nodriza.io",
    "type": "string",
    "regex": "/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/",
    "required": true,
    "unique": true,
    "existCheck": true
  },
  "password": {
    "description": "At least 1 numeric charter, 1 lowercase, 1 uppercase, min len 8 length",
    "example": "Shox009_",
    "type": "string"
  },
  "status": {
    "description": "Activate or deactivate user",
    "example": "active",
    "type": "string",
    "defaultsTo": "active",
    "enum": [
      "active",
      "inactive",
      "deleted"
    ]
  },
  "title": {
    "example": "Mr.",
    "type": "string"
  },
  "gender": {
    "example": "male",
    "type": "string",
    "enum": [
      "male",
      "female"
    ]
  },
  "locale": {
    "description": "Default user language",
    "example": "en",
    "type": "string"
  },
  "company": {
    "description": "Company where the user belongs",
    "example": "59418bcd105605cc2693a981",
    "model": "company",
    "mustExist": true,
    "required": true
  },
  "department": {
    "description": "Company department where the user belongs",
    "example": "5940200e93e326e90c636826",
    "model": "department",
    "mustExist": true
  },
  "mobile": {
    "example": "57 311 521 3448",
    "type": "string"
  },
  "phone": {
    "example": "57 1 673 9407",
    "type": "string"
  },
  "ext": {
    "description": "Phone extention",
    "example": "103",
    "type": "string"
  },
  "avatars": {
    "description": "User avatar in different sizes",
    "type": "json",
    "skipAll": true
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
    "skipAll": true,
    "type": "json"
  },
  "home": {
    "description": "View route to redirect user after successful login, this route is inherited from first role assigned",
    "example": "/dashboard",
    "skipCreate": true,
    "type": "string"
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}