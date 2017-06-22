"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var link_1 = require('../../shared-classes/link');
var GlobalNavComponent = (function () {
    function GlobalNavComponent(_router) {
        var _this = this;
        this._router = _router;
        this.links = new Array();
        this.links.push(new link_1.Link('/home', 'Home', 'fa-home'));
        this.links.push(new link_1.Link('/about', 'About', 'fa-user'));
        this.links.push(new link_1.Link('/portfolio', 'Portfolio', 'fa-briefcase'));
        this._router.events.subscribe(function (data) {
            $('.navbar-collapse').removeClass('show'); // collapses nav if expanded
            var path = data['url'];
            if (path === '/' || path === '/home') {
                _this.fadeNavColors('white', '#2F4050');
            }
            else if (path === '/about') {
                _this.fadeNavColors('white', '#2F4050');
            }
            else if (path === '/portfolio') {
                _this.fadeNavColors('white', '#2F4050');
            }
            else if (path === '/contact') {
                _this.fadeNavColors('white', '#2F4050');
            }
            else if (path === '/mlbstats') {
                _this.fadeNavColors('white', '#2F4050');
            }
            else if (path === '/mlbstatsapi') {
                _this.fadeNavColors('white', '#2F4050');
            }
            else if (path === '/powerball') {
                _this.fadeNavColors('white', '#2F4050');
            }
            $('.nav-collapsable').hide('slide', { direction: 'up' }, 200);
        });
    }
    GlobalNavComponent.prototype.fadeNavColors = function (textColor, backgroundColor) {
        var textColorJqEl = $('#globalNav').find('a');
        var backgroundColorJqEl = $('#globalNav');
        textColorJqEl.animate({ color: textColor }, 200);
        backgroundColorJqEl.animate({ 'background-color': backgroundColor }, 200);
    };
    GlobalNavComponent.prototype.ngOnInit = function () {
    };
    GlobalNavComponent = __decorate([
        core_1.Component({
            selector: 'app-global-nav',
            templateUrl: './global-nav.component.html',
            styleUrls: ['./global-nav.component.css']
        })
    ], GlobalNavComponent);
    return GlobalNavComponent;
}());
exports.GlobalNavComponent = GlobalNavComponent;
//# sourceMappingURL=global-nav.component.js.map