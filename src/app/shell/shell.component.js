"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var beer_tracker_service_1 = require('../pages/portfolio/beer-tracker/services/beer-tracker.service');
var ui_service_1 = require('../shared-services/ui.service');
var mlb_stats_service_1 = require('../pages/portfolio/mlb-stats/services/mlb-stats.service');
require('jquery');
require('jqueryui');
require('select2');
require('bootstrap');
var ShellComponent = (function () {
    function ShellComponent() {
    }
    ShellComponent.prototype.ngOnInit = function () {
    };
    ShellComponent = __decorate([
        core_1.Component({
            selector: 'app-shell',
            templateUrl: './shell.component.html',
            styleUrls: ['./shell.component.css'],
            providers: [beer_tracker_service_1.BeerTrackerService, ui_service_1.UIService, mlb_stats_service_1.MlbStatsService]
        })
    ], ShellComponent);
    return ShellComponent;
}());
exports.ShellComponent = ShellComponent;
//# sourceMappingURL=shell.component.js.map