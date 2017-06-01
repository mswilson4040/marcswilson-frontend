"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MlbApiExplorerComponent = (function () {
    function MlbApiExplorerComponent(http, uiService, mlbStatsService) {
        this.http = http;
        this.uiService = uiService;
        this.mlbStatsService = mlbStatsService;
        this.readonly = URL_ROOT = this.getUrlRoot();
        this.path = null;
        this.selectedYear = null;
        this.selectedTeamID = null;
        this.selectedPlayerID = null;
        this.endpointSelected = false;
    }
    MlbApiExplorerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.path = this.URL_ROOT;
        this.getDistinctYears();
        $('#teamsYearDD').select2({ placeholder: 'Select a year...', width: '100%' }).change(function (v) { _this.selectedYearChange(v, 'teams'); });
        $('#teamsTeamDD').select2({ placeholder: 'Select a team...', width: '100%' }).change(function (v) { _this.selectedTeamChange(v); });
        $('#playersYearDD').select2({ placeholder: 'Select a year...', width: '100%' }).change(function (v) { _this.selectedYearChange(v, 'players'); });
        $('#playersPlayerDD').select2({ placeholder: 'Select a player...', width: '100%' }).change(function (v) { _this.selectedPlayerChange(v); });
    };
    MlbApiExplorerComponent.prototype.getUrlRoot = function () {
        var root = window.location.href;
        var regex = new RegExp(/^.*\//);
        return regex.exec(root).toString();
    };
    MlbApiExplorerComponent.prototype.fetchAPIResult = function () {
        var _this = this;
        if (this.path !== this.URL_ROOT) {
            this.uiService.showOverlay('Fetching API Results');
            this.http.get(this.path).subscribe(function (response) {
                var jObj = JSON.parse(response['_body']);
                $('#results')['jsonViewer'](jObj);
                _this.uiService.hideOverlay();
            });
        }
        else {
        }
    };
    MlbApiExplorerComponent.prototype.getDistinctYears = function () {
        var _this = this;
        this.uiService.showOverlay('Fetching seasons...');
        this.mlbStatsService.getDistinctYears().then(function (years) {
            _this.years = years;
            _this.uiService.hideOverlay();
        });
    };
    MlbApiExplorerComponent.prototype.selectedYearChange = function (e, type) {
        var yearID = $(e.currentTarget).val();
        this.selectedYear = +yearID;
        this.path = this.URL_ROOT + 'api/mlbstats/years/' + this.selectedYear + '/' + type;
        if (type === 'teams') {
            this.getTeamsByYear();
        }
        else if (type === 'players') {
            this.getPlayersByYear();
        }
    };
    MlbApiExplorerComponent.prototype.getTeamsByYear = function () {
        var _this = this;
        this.uiService.showOverlay('Fetching teams...');
        this.mlbStatsService.getTeamsByYear(this.selectedYear).then(function (teams) {
            console.log(teams);
            _this.teams = teams;
            _this.uiService.hideOverlay();
        });
    };
    MlbApiExplorerComponent.prototype.getPlayersByYear = function () {
        var _this = this;
        this.uiService.showOverlay('Fetching players...');
        this.http.get(this.URL_ROOT + 'api/mlbstats/years/' + this.selectedYear + '/players').subscribe(function (players) {
            var parsed = JSON.parse(players['_body']);
            _this.players = parsed;
            _this.uiService.hideOverlay();
        });
    };
    MlbApiExplorerComponent.prototype.selectedTeamChange = function (e) {
        var teamID = $(e.currentTarget).val();
        this.selectedTeamID = teamID;
        this.path = this.URL_ROOT + 'api/mlbstats/years/' + this.selectedYear + '/teams/' + this.selectedTeamID;
    };
    MlbApiExplorerComponent.prototype.selectedPlayerChange = function (e) {
        var playerID = $(e.currentTarget).val();
        this.selectedPlayerID = playerID;
        this.path = this.URL_ROOT + 'api/mlbstats/players/id/' + this.selectedPlayerID;
    };
    MlbApiExplorerComponent.prototype.getAllBallparks = function () {
        this.path = this.URL_ROOT + 'api/mlbstats/ballparks';
    };
    MlbApiExplorerComponent = __decorate([
        core_1.Component({
            selector: 'app-mlb-api-explorer',
            templateUrl: './mlb-api-explorer.component.html',
            styleUrls: ['./mlb-api-explorer.component.css']
        })
    ], MlbApiExplorerComponent);
    return MlbApiExplorerComponent;
}());
exports.MlbApiExplorerComponent = MlbApiExplorerComponent;
//# sourceMappingURL=mlb-api-explorer.component.js.map