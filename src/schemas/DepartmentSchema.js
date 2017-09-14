module.exports = {
  "name": {
    "description": "Department name",
    "example": "Management",
    "type": "string",
    "required": true,
    "unique": true,
    "existCheck": true
  },
  "description": {
    "description": "Department description",
    "example": "People in charge of a certain group",
    "type": "string"
  }
}