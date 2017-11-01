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
    "example": "Acme Account Name",
    "displayName": true,
    "required": true,
    "type": "string",
    "defaultsTo": "Acme Account"
  },
  "awsAccountNumber": {
    "description": "To find your AWS account ID number on the AWS Management Console, choose Support on the navigation bar on the upper-right, and then choose Support Center",
    "example": "123160232530",
    "skipCreate": true,
    "displayName": true,
    "unique": true,
    "type": "string"
  },
  "awsAccessKey": {
    "description": "Access key to sign programmatic requests to AWS",
    "example": "AKIAJAANEDJGCJF3EV5Q",
    "required": true,
    "unique": true,
    "type": "string",
    "defaultsTo": "AKIAJAANEDJGCJF3EV5Q"
  },
  "awsSecretAccessKey": {
    "description": "Secret Access key to sign programmatic requests to AWS",
    "example": "DvUYrhGpLah4WK4GSzl4O6WUXN8iW37duHlvdqYH",
    "required": true,
    "type": "string",
    "defaultsTo": "DvUYrhGpLah4WK4GSzl4O6WUXN8iW37duHlvdqYH"
  },
  "iamUser": {
    "description": "User assigned to perform Nodriza operations",
    "example": "nodrizaUser",
    "required": true,
    "type": "string",
    "defaultsTo": "nodrizaUser"
  },
  "billingReportBucket": {
    "description": "Bucket for AWS billing reports",
    "example": "billing-reports-bucket",
    "skipCreate": true,
    "regex": "/^([a-z0-9-.]+)$/",
    "type": "string",
    "skipUpdate": true,
    "defaultsTo": "nodriza-billing-bucket"
  },
  "defaultRegion": {
    "description": "Prefered region for deployments",
    "example": "us-east-1",
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
  "isLinked": {
    "description": "This account is linked to another payer account",
    "defaultsTo": false,
    "type": "boolean"
  },
  "payerAwsAccount": {
    "description": "Specify a payer account for linked accounts",
    "model": "awsAccount",
    "mustExist": true
  },
  "enableDetailedBilling": {
    "description": "Enable detailed billing reports",
    "example": true,
    "defaultsTo": true,
    "type": "boolean"
  }
}