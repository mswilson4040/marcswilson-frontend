interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'AUTH0_CLIENT_ID',
  domain: 'domain.auth0.com',
  callbackURL: 'http://domain/callback'
}
