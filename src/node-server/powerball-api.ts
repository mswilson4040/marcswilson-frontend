/**
 * Created by Marc on 6/20/2017.
 */

export class PowerballApi {
  private _express: any = null;
  private _request: any = null;
  private _router: any = null;

  constructor() {
    this._express = require('express');
    this._request = require('request');
    this._router = this._express.Router();
    this._router.get('/powerball', (request, response) => {
      this._request('http://data.ny.gov/resource/d6yy-54nr.json', (error, res, body) => {
        response.json(JSON.parse(body));
      });
    });
    module.exports = this._router;
  }
}
new PowerballApi();
