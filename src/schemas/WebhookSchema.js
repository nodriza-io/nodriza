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
  "payloadUrl": {
    "description": "The payload URL is the URL of the server that will receive the webhook POST requests",
    "type": "string",
    "unique": true,
    "required": true
  },
  "authorization": {
    "description": "Setting a webhook authorization header allows you to ensure that POST requests sent to the payload URL are from Nodriza.io",
    "type": "string",
    "required": true
  },
  "contentType": {
    "description": "Webhooks can be delivered using different content types, choose the one that best fits your needs.",
    "type": "string",
    "defaultsTo": "application/json",
    "required": true,
    "enum": [
      "application/json",
      "application/x-www-form-urlencoded"
    ]
  },
  "active": {
    "description": "You can choose to disable the delivery of webhook payloads",
    "type": "boolean",
    "defaultsTo": true
  },
  "events": {
    "enumStrings": [
      "customObjRec_create",
      "customObjRec_destroy",
      "customObjRec_update",
      "document_view",
      "invoice_changeStatus",
      "invoice_create",
      "invoice_destroy",
      "invoice_generateCommissionPo",
      "invoice_notifyStatus",
      "invoice_recordPayment",
      "invoice_sendReminder",
      "invoice_setCommission",
      "invoice_share",
      "invoice_starred",
      "invoice_update",
      "lead_changeStatus",
      "lead_create",
      "lead_destroy",
      "lead_starred",
      "lead_update",
      "proposal_changeStatus",
      "proposal_create",
      "proposal_denialReason",
      "proposal_destroy",
      "proposal_embedComponent",
      "proposal_generate",
      "proposal_generateInvoice",
      "proposal_makePublicVersion",
      "proposal_send",
      "proposal_setCloseDate",
      "proposal_setRecommendations",
      "proposal_share",
      "proposal_starred",
      "proposal_update",
      "snippet_create",
      "snippet_destroy",
      "snippet_update",
      "snippet_updateSnippetSku",
      "user_addAllRoles",
      "user_addPermissions",
      "user_addRoles",
      "user_changeStatus",
      "user_create",
      "user_destroy",
      "user_login",
      "user_loginChromeAgent",
      "user_logout",
      "user_logoutAllDevices",
      "user_removeAllPermissions",
      "user_removeAllRoles",
      "user_removePermissions",
      "user_removeRoles",
      "user_requestResetPassword",
      "user_resetPassword",
      "user_update",
      "user_updateRoles",
      "user_uploadAvatar"
    ],
    "multiple": true,
    "description": "These webhooks fire whenever a certain action is taken on Nodriza.io, which your server's payload URL intercepts and acts upon.",
    "type": "array",
    "required": true
  }
}