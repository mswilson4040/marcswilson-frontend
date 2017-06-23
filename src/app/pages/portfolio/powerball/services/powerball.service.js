"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var powerball_1 = require('../classes/powerball');
var powerball_data_1 = require('../classes/powerball-data');
var PowerballService = (function () {
    function PowerballService(_http) {
        this._http = _http;
        this.API_PATH = null;
        var loc = window.location.origin;
        if (loc.indexOf('localhost') > -1) {
            this.API_PATH = 'http://localhost:3000/api/powerball/';
        }
        else {
            this.API_PATH = 'http://marcswilson.com/api/powerball/';
        }
    }
    PowerballService.prototype.getPowerball = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.get(_this.API_PATH + 'powerball').subscribe(function (data) {
                var res = JSON.parse(data['_body']);
                var ret = new powerball_data_1.PowerballData();
                for (var i = 0; i < res.length; i++) {
                    ret.addDrawing(new powerball_1.Powerball(res[i]));
                }
                resolve(ret);
            });
        });
    };
    PowerballService = __decorate([
        core_1.Injectable()
    ], PowerballService);
    return PowerballService;
}());
exports.PowerballService = PowerballService;
//# sourceMappingURL=powerball.service.js.map