import { AUTH_CONFIG } from './auth0.config';

export const environment = {
  production: true,
  API_PATH: 'http://marcswilson.com/api',
  ROOT_URL: 'http://marcswilson.com',
  AUTH0_CLIENTID: AUTH_CONFIG.clientID,
  AUTH0_DOMAIN: AUTH_CONFIG.domain,
  AUTH0_CALLBACK: AUTH_CONFIG.callbackURL,
  AUTH0_CALLBACK_ROUTE_KEY: 'marcswilson_auth0_callback_route',
  AUTH0_AUTH_RESPONSE_MODEL_KEY: 'marcswilson_auth0_user_model'
};
