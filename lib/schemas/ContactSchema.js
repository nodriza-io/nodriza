"use strict";

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
  "phone": {
    "description": "Company phone number",
    "example": "57 1 673 9407",
    "type": "string"
  },
  "companyName": {
    "displayName": true,
    "description": "Company friendly name",
    "example": "Acme",
    "type": "string"
  },
  "company": {
    "description": "Company where the lead belongs",
    "example": "59418bcd105605cc2693a981",
    "model": "company",
    "mustExist": true,
    "skipAll": true
  },
  "taxId": {
    "description": "Company tax id",
    "example": "111111111",
    "type": "string"
  },
  "source": {
    "description": "Company where the lead belongs",
    "type": "string"
  },
  "size": {
    "description": "Number of company employees",
    "example": "51-200",
    "type": "string",
    "enum": ["1-10", "51-200", "201-500", "501-1000", "11-50", "5000-10000", "1001-5000", "10000+"]
  },
  "industry": {
    "description": "Company industry type",
    "example": "Computer Networking",
    "type": "string"
  },
  "position": {
    "description": "Company user position",
    "example": "Sales Manager",
    "type": "string"
  },
  "assignedTo": {
    "description": "Assign record to a user",
    "example": "59418bcd105605cc2693a981",
    "model": "user"
  },
  "referredBy": {
    "description": "Referred by",
    "example": "59418bcd105605cc2693a981",
    "model": "user"
  },
  "referenceNumber": {
    "description": "ID or Reference external",
    "unique": true,
    "displayName": true,
    "type": "string"
  },
  "status": {
    "description": "Contact status",
    "example": "Called",
    "type": "string"
  },
  "specialObservations": {
    "description": "Specify if the lead has some special observation",
    "type": "string",
    "longtext": "true"
  },
  "metadata": {
    "description": "Extent of lead document",
    "type": "json"
  },
  "Activities": {
    "description": "Extent of lead document",
    "type": "array",
    "skipAll": true
  }
};