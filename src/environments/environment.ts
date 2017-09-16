// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import {AUTH_CONFIG} from './auth0.config';

export const environment = {
  production: false,
  API_PATH: 'http://localhost:3000/api',
  ROOT_URL: 'http://localhost:4200',
  AUTH0_CLIENTID: AUTH_CONFIG.clientID,
  AUTH0_DOMAIN: AUTH_CONFIG.domain,
  AUTH0_CALLBACK: AUTH_CONFIG.callbackURL,
  AUTH0_CALLBACK_ROUTE_KEY: 'marcswilson_auth0_callback_route',
  AUTH0_AUTH_RESPONSE_MODEL_KEY: 'marcswilson_auth0_user_model'
};
