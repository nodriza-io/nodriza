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
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "accountName": {
    "description": "AWS account friendly identifier",
    "example": "Acme account",
    "required": true,
    "type": "string"
  },
  "awsAccountNumber": {
    "description": "To find your AWS account ID number on the AWS Management Console, choose Support on the navigation bar on the upper-right, and then choose Support Center",
    "example": "123160232530",
    "skipCreate": true,
    "unique": true,
    "type": "string"
  },
  "awsAccessKey": {
    "description": "Access key to sign programmatic requests to AWS",
    "example": "123160232530",
    "defaultsTo": "AKIAJMFEE72J63DECOEA",
    "required": true,
    "unique": true,
    "type": "string"
  },
  "awsSecretAccessKey": {
    "description": "Secret Access key to sign programmatic requests to AWS",
    "example": "I1SxeZrMZnNecQWL9SoodBboAb3eQJ0SPXkAnC99",
    "defaultsTo": "agoQXn/jqBgmvTimx9CNAGZoYlPhZTqjWfBixFk6",
    "required": true,
    "type": "string"
  },
  "iamUser": {
    "description": "User assigned to perform Nodriza operations",
    "example": "nodrizaUser",
    "required": true,
    "type": "string"
  },
  "billingReportBucket": {
    "description": "Bucket for AWS billing reports",
    "required": true,
    "regex": "/^([a-z0-9-.]+)$/",
    "minLength": 3,
    "maxLength": 63,
    "type": "string",
    "skipUpdate": true
  },
  "defaultRegion": {
    "description": "Prefered region for deployments",
    "required": true,
    "mustExist": true,
    "defaultsTo": {
      "id": "58f39b53bea9698030a88686",
      "regionName": "us-east-1",
      "location": "US East (N. Virginia)"
    },
    "type": "string",
    "model": "region"
  },
  "payerAccount": {
    "description": "Specify a payer account",
    "model": "awsAccount",
    "mustExist": true
  }
}