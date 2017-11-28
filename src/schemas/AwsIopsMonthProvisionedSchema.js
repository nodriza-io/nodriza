module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "awsVolume": {},
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