module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "isPayerAccount": {
    "description": "This is a payer account",
    "defaultsTo": true,
    "type": "boolean"
  },
  "accountName": {
    "description": "AWS account friendly identifier",
    "example": "Acme Account Name",
    "displayName": true,
    "required": true,
    "type": "string",
    "unique": true
  },
  "awsAccountNumber": {
    "description": "To find your AWS account ID number on the AWS Management Console, choose Support on the navigation bar on the upper-right, and then choose Support Center",
    "example": "123160232530",
    "primaryKey": true,
    "skipCreate": true,
    "displayName": true,
    "unique": true,
    "type": "string"
  },
  "assignedClient": {
    "description": "Client who has been assigned the AWS account",
    "model": "company"
  },
  "iamUser": {
    "description": "User assigned to perform Nodriza operations",
    "example": "nodrizaUser",
    "type": "string",
    "skipAll": true,
    "defaultsTo": "NodrizaUser"
  },
  "awsAccessKey": {
    "description": "Access key to sign programmatic requests to AWS",
    "example": "BKIAJAANEDJGCJF3EV5Q",
    "unique": true,
    "type": "string"
  },
  "awsSecretAccessKey": {
    "description": "Secret Access key to sign programmatic requests to AWS",
    "example": "DvUYrhGpLahKWK4GSzl4O6WUXN8iW37duHlvdqYu",
    "type": "string"
  },
  "enableAutoTag": {
    "description": "Automatically create tags for detailed usage tracking (Required to generate plans)",
    "defaultsTo": false,
    "type": "boolean"
  },
  "enableBillingReports": {
    "description": "Enable detailed billing reports",
    "example": false,
    "defaultsTo": false,
    "type": "boolean"
  },
  "billingReportBucket": {
    "description": "Bucket for AWS billing reports",
    "example": "billing-reports-bucket",
    "regex": "/^([a-z0-9-.]+)$/",
    "type": "string"
  },
  "region": {
    "description": "Prefered region for this AWS account",
    "example": "us-east-1",
    "required": true,
    "mustExist": true,
    "defaultsTo": {
      "id": "58f39b53bea9698030a88686",
      "regionName": "us-east-1",
      "location": "US East (N. Virginia)"
    },
    "type": "string",
    "model": "awsRegion"
  },
  "payerAwsAccount": {
    "description": "Specify a payer account for linked accounts",
    "model": "awsAccount",
    "mustExist": true,
    "skipAll": true
  },
  "monthlyBudget": {
    "description": "Set a monthly billing budget",
    "defaultsTo": 0,
    "type": "float"
  },
  "maxSpendPerMonthAlert": {
    "description": "Notify responsables as soon as a bill surpasses a defined threshold per day",
    "defaultsTo": 0,
    "type": "float"
  },
  "maxSpendPerDayAlert": {
    "description": "Notify responsables as soon as a bill surpasses a defined threshold per month",
    "defaultsTo": 0,
    "type": "float"
  },
  "maxSpendPerHourAlert": {
    "description": "Notify responsables as soon as a bill surpasses a defined threshold per hour",
    "defaultsTo": 0,
    "type": "float"
  },
  "linkedAccounts": {
    "description": "Linked AWS Accounts",
    "type": "array",
    "defaultsTo": [],
    "skipAll": true
  },
  "awsPriceMultiplier": {
    "required": true,
    "min": 1,
    "defaultsTo": 1,
    "type": "float"
  },
  "products": {
    "description": "Add products to monthly invoice",
    "productList": true,
    "type": "array"
  },
  "responsables": {
    "description": "Send AWS Account notifications to these users",
    "type": "array",
    "multiple": "user"
  }
}