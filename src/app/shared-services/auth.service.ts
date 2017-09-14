import { Injectable } from '@angular/core';
import * as Auth0 from 'auth0-js';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  public auth0: Auth0 = null;
  public callbackRoute: string = null;
  constructor(private _router: Router) {
    this.auth0 = new Auth0.WebAuth({
      clientID: environment.AUTH0_CLIENTID,
      domain: environment.AUTH0_DOMAIN,
      responseType: 'token id_token',
      audience: `https://${environment.AUTH0_DOMAIN}/userinfo`,
      redirectUri: environment.AUTH0_CALLBACK,
      scope: 'openid'
    });
  }
  login(callbackRoute: string): void {
    this.callbackRoute = callbackRoute;
    this.auth0.authorize();
  }
  handleAuthentication(): void {
    this.auth0.parseHash( (error, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this._router.navigate([this.callbackRoute]);
      } else if (error) {
        alert(error.error);
      }
    });
}
}
