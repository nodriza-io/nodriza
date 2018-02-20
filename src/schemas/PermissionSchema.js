module.exports = {
  "keyname": {
    "description": "Unique permission name",
    "example": "user_update_firstName -> Allow update fistName in user",
    "required": true,
    "type": "string",
    "alphanumericdashed": true,
    "unique": true,
    "primaryKey": true,
    "existCheck": true
  },
  "group": {
    "description": "Group permissions",
    "example": "user",
    "required": true,
    "type": "string",
    "defaultsTo": "unassigned"
  },
  "type": {
    "description": "Permission type",
    "example": "action",
    "required": true,
    "type": "string",
    "enum": [
      "action",
      "interface",
      "system",
      "meta"
    ]
  },
  "description": {
    "description": "Description about what the permission allow to do",
    "type": "string",
    "defaultsTo": ""
  },
  "role": {
    "description": "Allow assign specific permission to one role",
    "collection": "role",
    "via": "permission"
  },
  "user": {
    "description": "User to permission association",
    "collection": "user",
    "via": "permission"
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}