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
    "model": "awsvolume",
    "skipAll": true
  },
  "iops": {
    "type": "integer",
    "skipAll": true
  },
  "regionName": {
    "skipAll": true,
    "model": "awsregion",
    "noCreate": true
  },
  "product": {
    "skipAll": true,
    "model": "product"
  }
}