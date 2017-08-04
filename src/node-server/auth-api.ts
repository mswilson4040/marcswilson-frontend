export class AuthApi {
  public express: any = null;
  public request: any = null;
  public router: any = null;
  public passport: any = null;
  public strategy: any = null;
  constructor() {
    this.express = require('express');
    this.request = require('request');
    this.passport = require('passport');
    this.strategy = require('passport-facebook').Strategy;
    this.router = this.express.Router();

    this.passport.use(new this.strategy({
      clientID: this.getEnvironmentVariables().CLIENT_ID,
      clientSecret: this.getEnvironmentVariables().CLIENT_SECRET,
      callbackURL: `${this.getEnvironmentVariables().API_PATH}/auth/facebook/return`
    }, (accessToken, refreshToken, profile, cb) => {
      return cb(null, profile);
    }));
    this.router.use(this.passport.initialize());
    this.router.use(this.passport.session());
    this.passport.serializeUser( (user, cb) => { cb(null, user); });
    this.passport.deserializeUser( (obj, cb) => { cb(null, obj); });
    this.router.get('/facebook', this.passport.authenticate('facebook'));


    this.router.get('/facebook/return', this.passport.authenticate('facebook', { failureRedirect: '/'}),
      (request, response) => {
      response.redirect(this.getEnvironmentVariables().ROOT_URL);
    });
    module.exports = this.router;
  }
  getEnvironmentVariables() {
      const prod = 'prod';
      if (prod === 'prod') {
        return {
          API_PATH: 'http://localhost:3000/api',
          ROOT_URL: 'http://localhost:4200',
          CLIENT_ID: '1813751935560209',
          CLIENT_SECRET: '7a8fbb2e45d3bae62b8e7b54282b9e55'
        };
      } else {
        return {
          API_PATH: 'http://marcswilson.com/api',
          ROOT_URL: 'http://marcswilson.com',
          CLIENT_ID: '1704362863165784',
          CLIENT_SECRET: 'f6a4c314aa6c1971d05b51f67fda880a'
        };
      }
  }

}
new AuthApi();
