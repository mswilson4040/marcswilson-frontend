"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// https://github.com/chadwickbureau/baseballdatabank/tree/master/core
// https://github.com/jimniels/teamcolors
// TODO: http://gd2.mlb.com/components/ <--- LOOK INTO THIS (Box Scores and other game stats from ESPN)
var core_1 = require('@angular/core');
var mlbplayers_component_1 = require('./mlbplayers/mlbplayers.component');
var mlbteam_component_1 = require('./mlbteam/mlbteam.component');
var mlbballparks_component_1 = require('./mlbballparks/mlbballparks.component');
var mlbteams_component_1 = require('./mlbteams/mlbteams.component');
var MlbStatsComponent = (function () {
    function MlbStatsComponent(_mlbStatsService, _componentFactoryResolver, _uiService) {
        var _this = this;
        this._mlbStatsService = _mlbStatsService;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._uiService = _uiService;
        this.currentComponentRef = null;
        this.boxscores = new Array();
        this._mlbStatsService.selectedYear$.subscribe(function (year) {
            _this.selectedYear = year;
        });
        this._mlbStatsService.selectedTeam$.subscribe(function (team) {
            if (team !== null) {
                _this.selectedTeam = team;
                if (_this.currentComponentRef !== null) {
                    _this.currentComponentRef.destroy();
                }
                _this.addComponent(mlbteam_component_1.MLBTeamComponent);
            }
        });
        this._mlbStatsService.selectedPlayer$.subscribe(function (player) {
            if (player !== null) {
                _this.addComponent(mlbplayers_component_1.MLBPlayersComponent);
            }
        });
    }
    MlbStatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._uiService.showOverlay('Fetching Box Scores...');
        this._mlbStatsService.getBoxScores(new Date()).then(function (bs) {
            _this.boxscores = bs;
            _this._uiService.hideOverlay();
        });
    };
    MlbStatsComponent.prototype.addComponent = function (component) {
        if (this.currentComponentRef !== null) {
            this.currentComponentRef.destroy();
        }
        var factory = this._componentFactoryResolver.resolveComponentFactory(component);
        this.currentComponentRef = this.viewContainerRef.createComponent(factory);
    };
    MlbStatsComponent.prototype.goToPlayers = function () {
        var _this = this;
        this._mlbStatsService.setSelectedPlayer(null);
        this.fadeSelectorToUpperLeft().then(function () {
            _this.addComponent(mlbplayers_component_1.MLBPlayersComponent);
        });
    };
    MlbStatsComponent.prototype.goToTeams = function () {
        var _this = this;
        this.fadeSelectorToUpperLeft().then(function () {
            _this.addComponent(mlbteams_component_1.MLBteamsComponent);
        });
    };
    MlbStatsComponent.prototype.goToBallparks = function () {
        var _this = this;
        this.fadeSelectorToUpperLeft().then(function () {
            _this.addComponent(mlbballparks_component_1.MLBBallparksComponent);
        });
    };
    MlbStatsComponent.prototype.fadeSelectorToUpperLeft = function () {
        return new Promise(function (resolve, reject) {
            $('.jumbotron').animate({ display: 'none' }, function () {
                resolve();
            });
        });
    };
    __decorate([
        core_1.ViewChild('componentPlaceholder', { read: core_1.ViewContainerRef })
    ], MlbStatsComponent.prototype, "viewContainerRef");
    MlbStatsComponent = __decorate([
        core_1.Component({
            selector: 'app-mlb-stats',
            templateUrl: './mlb-stats.component.html',
            styleUrls: ['./mlb-stats.component.css']
        })
    ], MlbStatsComponent);
    return MlbStatsComponent;
}());
exports.MlbStatsComponent = MlbStatsComponent;
//# sourceMappingURL=mlb-stats.component.js.map