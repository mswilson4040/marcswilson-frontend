"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var PowerballComponent = (function () {
    function PowerballComponent(_powerballService) {
        this._powerballService = _powerballService;
        this.powerball = new Array();
    }
    PowerballComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._powerballService.getPowerball().then(function (pb) {
            _this.powerball = pb;
            var data = _this.buildData(_this.powerball);
            _this.drawChart(data);
        });
    };
    PowerballComponent.prototype.buildData = function (data) {
        // [number, hits]
        var hash = {};
        for (var i = 0; i < data.length; i++) {
            var pb = data[i];
            var first = pb.first;
            var second = pb.second;
            var third = pb.third;
            var fourth = pb.fourth;
            var fifth = pb.fifth;
            var powerball = pb.powerball;
            if (hash.hasOwnProperty(first)) {
                hash[first] += 1;
            }
            else {
                hash[first] = 1;
            }
            if (hash.hasOwnProperty(second)) {
                hash[second] += 1;
            }
            else {
                hash[second] = 1;
            }
            if (hash.hasOwnProperty(third)) {
                hash[third] += 1;
            }
            else {
                hash[third] = 1;
            }
            if (hash.hasOwnProperty(fourth)) {
                hash[fourth] += 1;
            }
            else {
                hash[fourth] = 1;
            }
            if (hash.hasOwnProperty(fifth)) {
                hash[fifth] += 1;
            }
            else {
                hash[fifth] = 1;
            }
            if (hash.hasOwnProperty(powerball)) {
                hash[powerball] += 1;
            }
            else {
                hash[powerball] = 1;
            }
        }
        var arr = [];
        for (var obj in hash) {
            if (hash.hasOwnProperty(obj)) {
                arr.push([obj.toString(), hash[obj]]);
            }
        }
        return arr;
    };
    PowerballComponent.prototype.drawChart = function (data) {
        Highcharts.chart('powerballChart', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Drawn numbers'
            },
            subtitle: {
                text: '',
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
                pointFormat: 'Times drawn : <b>{point.y}</b>'
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
    PowerballComponent = __decorate([
        core_1.Component({
            selector: 'app-powerball',
            templateUrl: './powerball.component.html',
            styleUrls: ['./powerball.component.css']
        })
    ], PowerballComponent);
    return PowerballComponent;
}());
exports.PowerballComponent = PowerballComponent;
//# sourceMappingURL=powerball.component.js.map