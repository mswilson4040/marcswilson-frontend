"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthApi = (function () {
    function AuthApi() {
        this.express = null;
        this.request = null;
        this.router = null;
        this.express = require('express');
        this.request = require('request');
        this.router = this.express.Router();
        module.exports = this.router;
    }
    return AuthApi;
}());
exports.AuthApi = AuthApi;
new AuthApi();
//# sourceMappingURL=auth-api.js.map