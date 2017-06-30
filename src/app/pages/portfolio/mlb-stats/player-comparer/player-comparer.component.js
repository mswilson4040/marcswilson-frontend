"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var PlayerComparerComponent = (function () {
    function PlayerComparerComponent(_mlbStatsService) {
        this._mlbStatsService = _mlbStatsService;
        this.firstAppearances = new Array();
        this.secondAppearances = new Array();
    }
    PlayerComparerComponent.prototype.ngOnInit = function () {
    };
    PlayerComparerComponent.prototype.drawChart = function (player1, player2) {
        Highcharts.chart('compareChart', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Population pyramid for Germany, 2015'
            },
            subtitle: {
                text: 'Source: <a href="http://populationpyramid.net/germany/2015/">Population Pyramids of the World from 1950 to 2100</a>'
            },
            xAxis: [{
                    categories: [],
                    reversed: false,
                    labels: {
                        step: 1
                    }
                }, {
                    opposite: true,
                    reversed: false,
                    categories: [],
                    linkedTo: 0,
                    labels: {
                        step: 1
                    }
                }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return Math.abs(this.value);
                    }
                }
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },
            series: [{
                    name: 'Male',
                    data: [-20.2, -2.2, -2.3, -2.5, -2.7, -3.1, -3.2,
                        -3.0, -3.2, -4.3, -4.4, -3.6, -3.1, -2.4,
                        -2.5, -2.3, -1.2, -0.6, -0.2, -0.0, -0.0]
                }, {
                    name: 'Female',
                    data: [20.1, 2.0, 2.2, 2.4, 2.6, 3.0, 3.1, 2.9,
                        3.1, 4.1, 4.3, 3.6, 3.4, 2.6, 2.9, 2.9,
                        1.8, 1.2, 0.6, 0.1, 0.0]
                }]
        });
    };
    PlayerComparerComponent = __decorate([
        core_1.Component({
            selector: 'app-player-comparer',
            templateUrl: './player-comparer.component.html',
            styleUrls: ['./player-comparer.component.css']
        })
    ], PlayerComparerComponent);
    return PlayerComparerComponent;
}());
exports.PlayerComparerComponent = PlayerComparerComponent;
//# sourceMappingURL=player-comparer.component.js.map