export class AuthApi {
  public express: any = null;
  public request: any = null;
  public router: any = null;

  constructor() {
    this.express = require('express');
    this.request = require('request');
    this.router = this.express.Router();

    module.exports = this.router;
  }
}
new AuthApi();
