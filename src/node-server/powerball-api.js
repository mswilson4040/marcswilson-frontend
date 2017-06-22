/**
 * Created by Marc on 6/20/2017.
 */
"use strict";
var PowerballApi = (function () {
    function PowerballApi() {
        var _this = this;
        this._express = null;
        this._request = null;
        this._router = null;
        this._express = require('express');
        this._request = require('request');
        this._router = this._express.Router();
        this._router.get('/powerball', function (request, response) {
            _this._request('http://data.ny.gov/resource/d6yy-54nr.json', function (error, res, body) {
                response.json(JSON.parse(body));
            });
        });
        module.exports = this._router;
    }
    return PowerballApi;
}());
exports.PowerballApi = PowerballApi;
new PowerballApi();
//# sourceMappingURL=powerball-api.js.map