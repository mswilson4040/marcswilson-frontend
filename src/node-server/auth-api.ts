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
      clientID: '1813751935560209',
      clientSecret: '7a8fbb2e45d3bae62b8e7b54282b9e55',
      callbackURL: 'http://localhost:3000/api/auth/login/facebook/return'
    }, (accessToken, refreshToken, profile, cb) => {
      return cb(null, profile);
    }));
    this.router.use(this.passport.initialize());
    this.router.use(this.passport.session());
    this.passport.serializeUser( (user, cb) => { cb(null, user); });
    this.passport.deserializeUser( (obj, cb) => { cb(null, obj); });
    this.router.get('/login/facebook', this.passport.authenticate('facebook'));

    this.router.get('/login/facebook/return', this.passport.authenticate('facebook', { failureRedirect: '/'}),
      (request, response) => {
      response.redirect('http://localhost:4200');
    });
    module.exports = this.router;
  }

}
new AuthApi();
