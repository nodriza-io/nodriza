module.exports = {
  "oem": {
    "description": "Essential data required by platform",
    "example": false,
    "type": "boolean",
    "required": true,
    "defaultsTo": true,
    "skipUpdate": true
  },
  "name": {
    "description": "Friendly application name identifier",
    "example": "Google Apps",
    "type": "string",
    "displayName": true,
    "required": true
  },
  "keyname": {
    "description": "Unique keyname identifier",
    "example": "google",
    "type": "string",
    "alphalowerDash": true,
    "required": true,
    "unique": true,
    "skipUpdate": true,
    "existCheck": true
  },
  "description": {
    "description": "Application description",
    "example": "Enable authentication through Google",
    "type": "string",
    "required": true
  },
  "createAppUrl": {
    "description": "URL to open an account and get the client ID",
    "example": "https://console.developers.google.com/apis/credentials",
    "type": "url"
  },
  "apiDocUrl": {
    "description": "Official application API documentation",
    "example": "https://developers.google.com/identity/protocols/OAuth2",
    "type": "url"
  },
  "active": {
    "description": "Set app status",
    "type": "boolean",
    "skipAll": true,
    "defaultsTo": false
  },
  "clientId": {
    "description": "After registering every app, you will receive a client ID and is considered public information, and is used to build login URLs, or included in Javascript source code on a page",
    "example": "467332518934-hf9q0e5q8qb5hvcs3f4d3hfpetrbpi9s.apps.googleusercontent.com",
    "type": "string"
  },
  "clientSecret": {
    "description": "After registering every app, you will receive a client secret ID and should not be exposed, be careful!",
    "example": "FqbCusgZgrMQspMQS3FWl5ue",
    "type": "string"
  },
  "accessTokenUri": {
    "description": "Url to redirect for Oauth2 authentication",
    "example": "https://www.googleapis.com/oauth2/v4/token",
    "type": "url"
  },
  "authorizationUri": {
    "description": "Url to redirect for Oauth2 authentication",
    "example": "https://accounts.google.com/o/oauth2/v2/auth",
    "type": "url",
    "required": true
  },
  "userInfoUri": {
    "description": "Some Oauth2 services offers a URL where the user profile information can be requested",
    "example": "https://www.googleapis.com/oauth2/v1/userinfo?access_token=",
    "type": "url"
  },
  "scopes": {
    "description": "Scopes let you specify exactly how the app needs to access.",
    "example": [
      "email",
      "profile"
    ],
    "type": "array",
    "defaultsTo": []
  },
  "dataMap": {
    "description": "JSON Object to map user profile data from different OAuth2 Providers",
    "example": {
      "email": "email",
      "firstName": "given_name",
      "lastName": "family_name"
    },
    "type": "json"
  },
  "allowUserLogin": {
    "description": "Allow users login using OAuth App",
    "example": false,
    "type": "boolean",
    "defaultsTo": false
  },
  "iconFont": {
    "description": "App icon font",
    "example": "nf nf-plugin",
    "type": "string",
    "required": true
  },
  "color": {
    "description": "App color",
    "example": "#4285F4",
    "type": "string",
    "required": true
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}