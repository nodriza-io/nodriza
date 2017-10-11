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
  "oem": {
    "description": "Essential data required by platform",
    "example": false,
    "type": "boolean",
    "required": true,
    "defaultsTo": true
  },
  "displayName": {
    "description": "Friendly role name identifier",
    "example": "Support",
    "type": "string",
    "required": true
  },
  "keyname": {
    "description": "Unique keyname identifier",
    "example": "support",
    "type": "string",
    "alphalowerDash": true,
    "required": true,
    "unique": true,
    "primaryKey": true,
    "existCheck": true
  },
  "description": {
    "description": "Full role description",
    "example": "Enable access to basic system features and full access to support center module",
    "type": "string"
  },
  "permission": {
    "description": "Role permissions",
    "collection": "permission",
    "via": "role"
  },
  "user": {
    "description": "Users who has this role",
    "collection": "user",
    "via": "role"
  },
  "type": {
    "description": "Role type",
    "example": "department",
    "type": "string",
    "enum": [
      "system",
      "company",
      "department",
      "custom"
    ],
    "required": true
  },
  "home": {
    "description": "View route that will be inherited by the user only if not set",
    "example": "/dashboard",
    "defaultsTo": "/dashboard",
    "type": "string"
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}