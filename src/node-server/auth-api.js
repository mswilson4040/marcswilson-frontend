"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environments/environment");
var AuthApi = (function () {
    function AuthApi() {
        this.express = null;
        this.request = null;
        this.router = null;
        this.passport = null;
        this.strategy = null;
        this.express = require('express');
        this.request = require('request');
        this.passport = require('passport');
        this.strategy = require('passport-facebook').Strategy;
        this.router = this.express.Router();
        this.passport.use(new this.strategy({
            clientID: '1813751935560209',
            clientSecret: '7a8fbb2e45d3bae62b8e7b54282b9e55',
            callbackURL: environment_1.environment.API_PATH + "/auth/facebook/return"
        }, function (accessToken, refreshToken, profile, cb) {
            return cb(null, profile);
        }));
        this.router.use(this.passport.initialize());
        this.router.use(this.passport.session());
        this.passport.serializeUser(function (user, cb) { cb(null, user); });
        this.passport.deserializeUser(function (obj, cb) { cb(null, obj); });
        this.router.get('/facebook', this.passport.authenticate('facebook'));
        this.router.get('/facebook/return', this.passport.authenticate('facebook', { failureRedirect: '/' }), function (request, response) {
            response.redirect(environment_1.environment.ROOT_URL);
        });
        module.exports = this.router;
    }
    return AuthApi;
}());
exports.AuthApi = AuthApi;
new AuthApi();
//# sourceMappingURL=auth-api.js.map