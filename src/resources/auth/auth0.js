import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'digitalpark.auth0.com',
    clientID: 'dW5hdeN1LAguH4CkZQe6u4AX2F3deKNw',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://digitalpark.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}