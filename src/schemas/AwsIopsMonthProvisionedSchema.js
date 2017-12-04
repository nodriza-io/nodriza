module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "awsAccount": {
    "required": true,
    "model": "awsAccount",
    "skipAll": true
  },
  "awsVolume": {
    "model": "awsVolume",
    "skipAll": true
  },
  "iops": {
    "type": "integer",
    "skipAll": true
  },
  "regionName": {
    "skipAll": true,
    "model": "awsRegion"
  },
  "product": {
    "skipAll": true,
    "model": "product"
  }
}