import { Injectable } from '@angular/core';
import * as Auth0 from 'auth0-js';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthenticationResponse } from '../models/authentication-response';

@Injectable()
export class AuthService {
  public auth0: Auth0 = null;
  public authWatch$: BehaviorSubject<AuthenticationResponse> = new BehaviorSubject<AuthenticationResponse>(null);

  set authWatch(value: AuthenticationResponse){
    this.authWatch$.next(value);
  }

  constructor(private _router: Router) {
    this.auth0 = new Auth0.WebAuth({
      clientID: environment.AUTH0_CLIENTID,
      domain: environment.AUTH0_DOMAIN,
      responseType: 'token id_token',
      audience: `https://${environment.AUTH0_DOMAIN}/userinfo`,
      redirectUri: environment.AUTH0_CALLBACK,
      scope: 'openid profile'
    });
  }
  login(callbackRoute: string): void {
    localStorage.setItem(environment.AUTH0_CALLBACK_ROUTE_KEY, callbackRoute);
    this.auth0.authorize();
  }
  handleAuthentication(): void {
    const callbackRoute = localStorage.getItem(environment.AUTH0_CALLBACK_ROUTE_KEY);
    localStorage.removeItem(environment.AUTH0_CALLBACK_ROUTE_KEY);
    this.auth0.parseHash( (error, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        const ar = new AuthenticationResponse(authResult.idTokenPayload);
        localStorage.setItem(environment.AUTH0_AUTH_RESPONSE_MODEL_KEY, JSON.stringify(ar));
        window.location.hash = '';
        this._router.navigate(callbackRoute ? [callbackRoute] : ['/home']);
      } else if (error) {
        alert(error.error);
      }
    });
  }
  isAuthenticated(): AuthenticationResponse {
    const authResponse = localStorage.getItem(environment.AUTH0_AUTH_RESPONSE_MODEL_KEY);
    if (authResponse) {
      const a = new AuthenticationResponse(JSON.parse(authResponse));
      this.authWatch = a;
      return a;
    } else {
      this.authWatch = null;
      return null;
    }
  }
  logout(): void {
    localStorage.removeItem(environment.AUTH0_CALLBACK_ROUTE_KEY);
    localStorage.removeItem(environment.AUTH0_AUTH_RESPONSE_MODEL_KEY);
    this.authWatch = null;
  }
}
