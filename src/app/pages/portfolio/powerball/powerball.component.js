"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var powerball_data_1 = require('./classes/powerball-data');
var PowerballComponent = (function () {
    function PowerballComponent(_powerballService, _uiService) {
        this._powerballService = _powerballService;
        this._uiService = _uiService;
        this.powerballData = new powerball_data_1.PowerballData();
        this.oneThroughSixtyNine = this.generateSixtyNine();
    }
    PowerballComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._uiService.showOverlay('Fetching Powerball numbers...');
        this._powerballService.getPowerball().then(function (pb) {
            _this.powerballData = pb;
            var data = _this.powerballData.getHighchartsData();
            _this.drawChart(data);
            _this._uiService.hideOverlay();
        });
    };
    PowerballComponent.prototype.drawChart = function (data) {
        Highcharts.chart('powerballChart', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Power Number hit counts'
            },
            subtitle: {
                text: 'Powerball'
            },
            xAxis: {
                categories: this.generateSixtyNine(),
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Times hit'
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: data
        });
    };
    PowerballComponent.prototype.generateSixtyNine = function () {
        var arr = [];
        for (var i = 0; i < 69; i++) {
            arr.push(i + 1);
        }
        return arr;
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