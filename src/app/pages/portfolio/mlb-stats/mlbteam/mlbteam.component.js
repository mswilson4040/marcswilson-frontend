"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var team_1 = require('../classes/team');
var MLBTeamComponent = (function () {
    function MLBTeamComponent(mlbStatsService) {
        var _this = this;
        this.mlbStatsService = mlbStatsService;
        this.selectedTeam = new team_1.Team();
        this.mlbStatsService.selectedTeam$.subscribe(function (team) {
            if (team !== null) {
                _this.selectedTeam = team;
                _this.mlbStatsService.getTeamByYear(_this.mlbStatsService.selectedYear, _this.selectedTeam).then(function (t) {
                    t = JSON.parse(t['_body']);
                    _this.selectedTeam = new team_1.Team(t);
                    var data = _this.buildChartData(null, 'HR');
                    _this.buildChart(data, 'HR');
                    $('html,body').delay(1000).animate({ scrollTop: 0 }, 100); // TODO: Shouldn't need a .delay here...
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
                text: 'Stats for the ' + this.mlbStatsService.selectedYear + ' ' + this.mlbStatsService.selectedTeam.name
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
                    data: data
                }]
        });
    };
    MLBTeamComponent.prototype.switchChart = function (node, stat) {
        var data = this.buildChartData(node, stat);
        this.buildChart(data, stat);
    };
    MLBTeamComponent.prototype.goToPlayer = function (player) {
        this.mlbStatsService.setSelectedPlayer(player);
    };
    MLBTeamComponent = __decorate([
        // TODO: Fix reference to proper ES6 syntax
        core_1.Component({
            selector: 'app-mlbteam',
            templateUrl: './mlbteam.component.html',
            styleUrls: ['./mlbteam.component.css']
        })
    ], MLBTeamComponent);
    return MLBTeamComponent;
}());
exports.MLBTeamComponent = MLBTeamComponent;
//# sourceMappingURL=mlbteam.component.js.map