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
    "example": "Acme",
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
    "required": true,
    "unique": true,
    "type": "string"
  },
  "awsSecretAccessKey": {
    "description": "Secret Access key to sign programmatic requests to AWS",
    "example": "I1SxeZrMZnNecQWL9SoodBboAb3eQJ0SPXkAnC99",
    "required": true,
    "type": "string"
  },
  "defaultRegion": {
    "description": "Set a default region for this account",
    "required": true,
    "mustExist": true,
    "type": "string",
    "model": "region"
  },
  "defaultAvailabilityZone": {
    "description": "Set a default availability zone for this account",
    "required": true,
    "mustExist": true,
    "type": "string",
    "model": "availabilityZone"
  },
  "payerAwsAccount": {
    "description": "Select a payer account if this account is a linked account",
    "model": "awsAccount",
    "mustExist": true
  }
}