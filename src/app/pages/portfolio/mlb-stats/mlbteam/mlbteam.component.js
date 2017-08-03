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
var team_1 = require("../classes/team");
var mlb_stats_service_1 = require("../services/mlb-stats.service");
var ui_service_1 = require("../../../../shared-services/ui.service");
var MLBTeamComponent = (function () {
    function MLBTeamComponent(_mlbStatsService, _uiService) {
        var _this = this;
        this._mlbStatsService = _mlbStatsService;
        this._uiService = _uiService;
        this.selectedTeam = new team_1.Team();
        this._uiService.showOverlay('Fetching Teams from ' + this._mlbStatsService.selectedYear + '...');
        this._mlbStatsService.selectedTeam$.subscribe(function (team) {
            if (team !== null) {
                _this.selectedTeam = team;
                _this._mlbStatsService.getTeamByYear(_this._mlbStatsService.selectedYear, _this.selectedTeam).then(function (t) {
                    _this.selectedTeam = t;
                    var data = _this.buildChartData(null, 'HR');
                    _this.buildChart(data, 'HR');
                    _this._uiService.hideOverlay();
                });
            }
        });
    }
    MLBTeamComponent.prototype.ngOnInit = function () {
        $('#teamStatsContainer').fadeIn();
    };
    MLBTeamComponent.prototype.ngOnDestroy = function () {
        $('#teamStatsContainer').fadeOut();
    };
    MLBTeamComponent.prototype.buildChartData = function (node, stat) {
        var ret = this.selectedTeam.players.map(function (p) {
            if (node === null) {
                return [p.personal[0].fullName, p.batting[0][stat]];
            }
            else {
                var s = p[node][0];
                if (!s) {
                    return [p.personal[0].fullName, 0];
                }
                else {
                    return [p.personal[0].fullName, s[stat]];
                }
            }
        });
        return ret;
    };
    MLBTeamComponent.prototype.buildChart = function (data, stat) {
        Highcharts.chart('teamStatsChart', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Stats for the ' + this._mlbStatsService.selectedYear + ' ' + this._mlbStatsService.selectedTeam.name
            },
            subtitle: {
                text: 'Source: <a href="https://github.com/chadwickbureau/baseballdatabank" target="_blank">Baseball Databank</a>',
                useHTML: true
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '10px',
                        fontFamily: 'sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Game Wins'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: stat + ': <b>{point.y}</b>'
            },
            series: [{
                    name: 'Game Wins',
                    data: data,
                }]
        });
    };
    MLBTeamComponent.prototype.switchChart = function (node, stat) {
        var data = this.buildChartData(node, stat);
        this.buildChart(data, stat);
    };
    MLBTeamComponent.prototype.goToPlayer = function (player) {
        this._mlbStatsService.setSelectedPlayer(player);
    };
    MLBTeamComponent = __decorate([
        core_1.Component({
            selector: 'app-mlbteam',
            templateUrl: './mlbteam.component.html',
            styleUrls: ['./mlbteam.component.scss']
        }),
        __metadata("design:paramtypes", [mlb_stats_service_1.MlbStatsService, ui_service_1.UIService])
    ], MLBTeamComponent);
    return MLBTeamComponent;
}());
exports.MLBTeamComponent = MLBTeamComponent;
//# sourceMappingURL=mlbteam.component.js.map