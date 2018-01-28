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
  "name": {
    "description": "Payment Name",
    "example": "PayPal",
    "required": true,
    "type": "string",
    "unique": true,
    "displayName": true
  },
  "keyname": {
    "description": "Payment method unique keyname. Only alphanumeric, dash and underscore allowed",
    "example": "paypal",
    "required": true,
    "primaryKey": true,
    "unique": true,
    "type": "string",
    "regex": "/^([a-z0-9_-]+)$/"
  },
  "description": {
    "description": "Payment description",
    "example": "Online payments system that supports online money transfers and serves as an electronic alternative to traditional paper methods like checks and money orders.",
    "type": "string",
    "longtext": true
  }
}