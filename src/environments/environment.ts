// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  API_PATH: 'http://localhost:3000/api',
  ROOT_URL: 'http://localhost:4200',
  AUTH0_CLIENTID: '3iT4JDvOLb73IFNsh0EPH2t9WTNhy0ep',
  AUTH0_DOMAIN: 'marcswilson.auth0.com',
  AUTH0_CALLBACK: 'http://localhost:4200/callback',
  AUTH0_CALLBACK_ROUTE_KEY: 'marcswilson_auth0_callback_route',
  AUTH0_AUTH_RESPONSE_MODEL_KEY: 'marcswilson_auth0_user_model'
};
