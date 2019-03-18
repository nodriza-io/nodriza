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
  "title": {
    "displayName": true,
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "users": {
    "description": "Filter report by these users",
    "type": "array",
    "multiple": "user"
  },
  "currency": {
    "description": "Filter report by this currency",
    "model": "currency",
    "noCreate": true
  },
  "specialObservations": {
    "type": "string",
    "longtext": "true"
  },
  "period": {
    "type": "string",
    "enum": [
      "Custom",
      "Daily",
      "Weekly",
      "Biweekly",
      "Monthly",
      "Bimestrial",
      "Quarterly",
      "FourMonthPeriod",
      "Semestral",
      "Annual"
    ]
  },
  "startDate": {
    "description": "Report start date",
    "required": true,
    "type": "datetime"
  },
  "endDate": {
    "description": "Report end date",
    "required": true,
    "type": "datetime"
  },
  "reportName": {
    "type": "string",
    "skipAll": true
  },
  "days": {
    "description": "Number of days in the report",
    "type": "integer",
    "skipAll": true
  },
  "periods": {
    "description": "Periods generated in the report",
    "type": "json",
    "skipAll": true
  },
  "completed": {
    "type": "boolean",
    "skipAll": true
  }
}