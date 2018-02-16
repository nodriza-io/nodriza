module.exports = {
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "name": {
    "description": "Friendly application name identifier",
    "example": "Google Apps",
    "required": true,
    "type": "string",
    "displayName": true,
    "skipAll": true
  },
  "keyname": {
    "description": "Unique keyname identifier",
    "example": "google",
    "type": "string",
    "required": true,
    "alphalowerDash": true,
    "unique": true,
    "skipAll": true,
    "existCheck": true
  },
  "description": {
    "description": "Application description",
    "example": "Enable authentication through Google",
    "required": true,
    "skipAll": true,
    "type": "string"
  },
  "createAppUrl": {
    "description": "URL to open an account and get the client ID",
    "example": "https://console.developers.google.com/apis/credentials",
    "type": "url",
    "skipAll": true
  },
  "apiDocUrl": {
    "description": "Official application API documentation",
    "example": "https://developers.google.com/identity/protocols/OAuth2",
    "type": "url",
    "skipAll": true
  },
  "active": {
    "description": "Set app status",
    "type": "boolean",
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
    "type": "url",
    "skipAll": true
  },
  "authorizationUri": {
    "description": "Url to redirect for Oauth2 authentication",
    "example": "https://accounts.google.com/o/oauth2/v2/auth",
    "required": true,
    "type": "url",
    "skipAll": true
  },
  "userInfoUri": {
    "description": "Some Oauth2 services offers a URL where the user profile information can be requested",
    "example": "https://www.googleapis.com/oauth2/v1/userinfo?access_token=",
    "type": "url",
    "skipAll": true
  },
  "scopes": {
    "description": "Scopes let you specify exactly how the app needs to access.",
    "example": [
      "email",
      "profile"
    ],
    "type": "array",
    "defaultsTo": [],
    "skipAll": true
  },
  "dataMap": {
    "description": "JSON Object to map user profile data from different OAuth2 Providers",
    "example": {
      "email": "email",
      "firstName": "given_name",
      "lastName": "family_name"
    },
    "type": "json",
    "skipAll": true
  },
  "allowUserLogin": {
    "description": "Allow users login using OAuth App",
    "example": false,
    "type": "boolean",
    "defaultsTo": false,
    "skipAll": true
  },
  "iconFont": {
    "description": "App icon font",
    "example": "nf nf-plugin",
    "required": true,
    "type": "string",
    "skipAll": true
  },
  "color": {
    "description": "App color",
    "example": "#4285F4",
    "required": true,
    "type": "string",
    "skipAll": true
  }
}