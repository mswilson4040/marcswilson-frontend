"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ui_service_1 = require('../shared-services/ui.service');
var mlb_stats_service_1 = require('../pages/portfolio/mlb-stats/services/mlb-stats.service');
require('jquery');
require('jqueryui');
require('select2');
require('bootstrap');
var powerball_service_1 = require('../pages/portfolio/powerball/services/powerball.service');
var ShellComponent = (function () {
    function ShellComponent() {
    }
    ShellComponent.prototype.ngOnInit = function () {
        if (window.location.href.indexOf('localhost') === -1) {
            $('#mediaHelper').remove();
        }
    };
    ShellComponent = __decorate([
        core_1.Component({
            selector: 'app-shell',
            templateUrl: './shell.component.html',
            styleUrls: ['./shell.component.css'],
            providers: [ui_service_1.UIService, mlb_stats_service_1.MlbStatsService, powerball_service_1.PowerballService]
        })
    ], ShellComponent);
    return ShellComponent;
}());
exports.ShellComponent = ShellComponent;
//# sourceMappingURL=shell.component.js.map