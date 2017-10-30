module.exports = {
  "createdBy": {
    "description": "User who created the resource",
    "model": "user",
    "required": true,
    "skipAll": true
  },
  "updatedBy": {
    "description": "Last user who updated the resource",
    "model": "user",
    "required": true,
    "skipAll": true
  },
  "accountName": {
    "required": true,
    "type": "string"
  },
  "awsAccountNumber": {
    "required": true,
    "type": "string"
  },
  "awsIamUsername": {
    "required": true,
    "type": "string"
  },
  "awsAccessKey": {
    "required": true,
    "type": "string"
  },
  "awsSecretAccessKey": {
    "required": true,
    "type": "string"
  },
  "defaultRegion": {
    "required": true,
    "mustExist": true,
    "type": "string",
    "model": "region"
  },
  "defaultZone": {
    "required": true,
    "mustExist": true,
    "type": "string",
    "model": "availabilityzone"
  },
  "payerAwsAccount": {
    "model": "awsaccount",
    "mustExist": true
  },
  "x509cert": {
    "type": "string"
  },
  "x509key": {
    "type": "string"
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}