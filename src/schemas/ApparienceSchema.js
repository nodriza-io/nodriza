module.exports = {
  "id": {
    "type": "string",
    "autoIncrement": true,
    "primaryKey": true,
    "unique": true
  },
  "createdAt": {
    "type": "datetime",
    "default": "NOW"
  },
  "updatedAt": {
    "type": "datetime",
    "default": "NOW"
  }
}