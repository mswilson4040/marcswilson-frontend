"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_1 = require("../../shared-classes/app");
var auth_service_1 = require("../../shared-services/auth.service");
var PortfolioComponent = (function () {
    function PortfolioComponent(_authService) {
        this._authService = _authService;
        this.apps = new Array();
        this.apps.push(new app_1.App('MLB Stats API', 'REST API for MLB Stats...', 'images/cruzswing.jpg', '/mlbstatsapi'));
        this.apps.push(new app_1.App('MLB Stats', 'In Progress...', 'images/handshakes.jpg', '/mlbstats'));
        // this.apps.push(new App('Powerball', 'In Progress...', 'images/blue-angels.jpg', '/powerball'));
        // this.apps.push(new App('Time Tracker', 'In Progress...', 'images/blue-angels.jpg', '/timetracker'));
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent.prototype.ngAfterViewInit = function () {
        var containers = $('.app-container');
        var delay = 100;
        for (var i = 0; i < containers.length; i++) {
            $(containers[i]).delay(delay).fadeIn(700);
            delay += 100;
        }
    };
    PortfolioComponent = __decorate([
        core_1.Component({
            selector: 'app-portfolio',
            templateUrl: './portfolio.component.html',
            styleUrls: ['./portfolio.component.scss']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], PortfolioComponent);
    return PortfolioComponent;
}());
exports.PortfolioComponent = PortfolioComponent;
//# sourceMappingURL=portfolio.component.js.map