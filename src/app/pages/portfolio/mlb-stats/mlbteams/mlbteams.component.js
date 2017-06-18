"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var team_1 = require('../classes/team');
var MLBteamsComponent = (function () {
    function MLBteamsComponent(mlbstatsService) {
        var _this = this;
        this.mlbstatsService = mlbstatsService;
        this.teams = new Array();
        this.mlbstatsService.selectedYear$.subscribe(function (year) {
            _this.mlbstatsService.getTeamsByYear(year).then(function (teams) {
                _this.teams = teams.map(function (team) {
                    return new team_1.Team(team);
                });
                var data = _this.buildChartData(_this.teams);
                _this.buildChart(data);
            });
        });
    }
    MLBteamsComponent.prototype.ngOnInit = function () {
        $('#mlbTeamStatsContainer').fadeIn();
    };
    MLBteamsComponent.prototype.ngOnDestroy = function () {
        $('#mlbTeamStatsContainer').fadeOut();
    };
    MLBteamsComponent.prototype.buildChartData = function (data) {
        var ret = data.map(function (team) {
            return [team.name, team.W];
        });
        return ret;
    };
    MLBteamsComponent.prototype.buildChart = function (data) {
        Highcharts.chart('mlbTeamChartContainer', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Game Wins for the ' + this.mlbstatsService.selectedYear + ' Season'
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
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
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
                pointFormat: 'Game Wins in ' + this.mlbstatsService.selectedYear + ': <b>{point.y}</b>'
            },
            series: [{
                    name: 'Game Wins',
                    data: data,
                    dataLabels: {
                        enabled: false,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y}',
                        y: 10,
                        style: {
                            fontSize: '10px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
        });
    };
    MLBteamsComponent.prototype.goToTeam = function (team) {
        this.mlbstatsService.setSelectedTeam(team);
    };
    MLBteamsComponent = __decorate([
        // TODO: Fix reference to proper ES6 syntax
        core_1.Component({
            selector: 'app-mlbteams',
            templateUrl: './mlbteams.component.html',
            styleUrls: ['./mlbteams.component.css']
        })
    ], MLBteamsComponent);
    return MLBteamsComponent;
}());
exports.MLBteamsComponent = MLBteamsComponent;
//# sourceMappingURL=mlbteams.component.js.map