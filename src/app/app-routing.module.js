"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var home_component_1 = require('./pages/home/home.component');
var about_component_1 = require('./pages/about/about.component');
var portfolio_component_1 = require('./pages/portfolio/portfolio.component');
var mlb_api_explorer_component_1 = require('./pages/portfolio/mlb-api-explorer/mlb-api-explorer.component');
var mlb_stats_component_1 = require('./pages/portfolio/mlb-stats/mlb-stats.component');
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'portfolio', component: portfolio_component_1.PortfolioComponent },
    { path: 'mlbstatsapi', component: mlb_api_explorer_component_1.MlbApiExplorerComponent },
    { path: 'mlbstats', component: mlb_stats_component_1.MlbStatsComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map