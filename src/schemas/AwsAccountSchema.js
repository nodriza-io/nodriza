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
  "iamUser": {
    "description": "User assigned to perform Nodriza operations",
    "example": "nodrizaUser",
    "type": "string",
    "skipAll": true,
    "defaultsTo": "NodrizaUser"
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
  "region": {
    "description": "Prefered region for this AWS account",
    "example": "us-east-1",
    "required": true,
    "skipAll": true,
    "defaultsTo": "us-east-1",
    "type": "string",
    "model": "awsregion",
    "noCreate": true
  },
  "billingReportBucket": {
    "description": "Bucket for AWS billing reports",
    "example": "billing-reports-bucket",
    "regex": "/^([a-z0-9-.]+)$/",
    "type": "string"
  },
  "monthlyBudget": {
    "description": "Set a monthly billing budget",
    "defaultsTo": 0,
    "type": "float"
  },
  "invoiceTitle": {
    "type": "string"
  },
  "invoiceLayout": {
    "model": "template",
    "type": "string"
  },
  "reportLayout": {
    "model": "template",
    "type": "string"
  },
  "invoiceCurrency": {
    "type": "string",
    "model": "currency",
    "noCreate": true
  },
  "invoiceDaysOutstanding": {
    "type": "integer",
    "defaultsTo": 30
  },
  "awsCommisionMultiplier": {
    "required": true,
    "min": 1,
    "defaultsTo": 1,
    "type": "float"
  },
  "products": {
    "description": "Add products to monthly invoice",
    "productList": true,
    "type": "array",
    "defaultsTo": []
  },
  "awsProductTax": {
    "model": "tax",
    "required": true,
    "defaultsTo": {
      "id": "59f8a10999a8b600610f74ef",
      "taxName": "No Tax"
    }
  },
  "linkedAccounts": {
    "description": "Linked AWS Accounts",
    "type": "array",
    "defaultsTo": [],
    "skipAll": true
  },
  "operationResponsibles": {
    "description": "Send notifications about account operations to these users",
    "type": "array",
    "multiple": "user"
  },
  "paymentResponsibles": {
    "description": "Send notifications about invoice payments to these users",
    "type": "array",
    "multiple": "user"
  },
  "payerAwsAccount": {
    "description": "Specify a payer account for linked accounts",
    "model": "awsAccount",
    "mustExist": true,
    "skipAll": true
  }
}