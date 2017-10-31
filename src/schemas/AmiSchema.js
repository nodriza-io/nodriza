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
  "architecture": {
    "example": "x86_64",
    "required": true,
    "type": "string"
  },
  "creationDate": {
    "example": "2017-02-22T12:31:33.000Z",
    "required": true,
    "type": "string"
  },
  "hypervisor": {
    "example": "xen",
    "required": true,
    "type": "string"
  },
  "imageId": {
    "example": "ami-f4cc1de2",
    "primaryKey": true,
    "displayName": true,
    "required": true,
    "type": "string"
  },
  "imageLocation": {
    "example": "099720109477/ubuntu/images/hvm-ssd/ubuntu-xenial-16.04-amd64-server-20170221",
    "required": true,
    "type": "string"
  },
  "imageType": {
    "example": "machine",
    "required": true,
    "type": "string"
  },
  "isPublic": {
    "example": false,
    "required": true,
    "type": "string"
  },
  "name": {
    "example": "ubuntu/images/hvm-ssd/ubuntu-xenial-16.04-amd64-server-20170221",
    "required": true,
    "type": "string"
  },
  "ownerId": {
    "example": "099720109477",
    "required": true,
    "type": "string"
  },
  "platform": {
    "example": "Ubuntu",
    "required": true,
    "type": "string"
  },
  "productCodes": {
    "example": [],
    "type": "array"
  },
  "rootDeviceName": {
    "example": "/dev/sda1",
    "required": true,
    "type": "string"
  },
  "rootDeviceType": {
    "example": "ebs",
    "required": true,
    "type": "string"
  },
  "virtualizationType": {
    "example": "hvm",
    "required": true,
    "type": "string"
  },
  "region": {
    "example": "us-east-1",
    "required": true,
    "type": "string",
    "model": "region"
  }
}