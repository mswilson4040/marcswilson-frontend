"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var app_1 = require('../../shared-classes/app');
var PortfolioComponent = (function () {
    function PortfolioComponent() {
        this.apps = new Array();
        this.apps.push(new app_1.App('MLB Stats API', 'REST API for MLB Stats...', 'images/cruzswing.jpg', '/mlbstatsapi'));
        this.apps.push(new app_1.App('MLB Stats', 'In Progress...', 'images/handshakes.jpg', '/mlbstats'));
        this.apps.push(new app_1.App('Powerball', 'In Progress...', 'images/blue-angels.jpg', '/powerball'));
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
    PortfolioComponent.prototype.showHoverDisplay = function (evt) {
        var container = $(evt.currentTarget);
        container.closest('.app-container').find('.app-footer').show('slide', {}, 300);
    };
    PortfolioComponent.prototype.hideHoverDisplay = function (evt) {
        var container = $(evt.currentTarget);
        container.closest('.app-container').find('.app-footer').hide();
    };
    PortfolioComponent = __decorate([
        core_1.Component({
            selector: 'app-portfolio',
            templateUrl: './portfolio.component.html',
            styleUrls: ['./portfolio.component.css']
        })
    ], PortfolioComponent);
    return PortfolioComponent;
}());
exports.PortfolioComponent = PortfolioComponent;
//# sourceMappingURL=portfolio.component.js.map