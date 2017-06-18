"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SliderComponent = (function () {
    function SliderComponent(mlbStatsService) {
        this.mlbStatsService = mlbStatsService;
        this.selectedYear = 1871;
    }
    SliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mlbStatsService.getDistinctYears().then(function (years) {
            _this.years = years;
            $('#dot').draggable({
                axis: 'x',
                containment: 'parent',
                drag: function (evt, ui) { _this.handleDrag(evt, ui); }
            });
            _this.setHandle(_this.selectedYear);
        });
    };
    SliderComponent.prototype.handleDrag = function (evt, ui) {
        var maxWidth = $('#line').width() - 15;
        var position = $('#dot').css('left');
        position = position.replace('px', '');
        var percent = (+position / +maxWidth) * 100;
        var index = Math.round((percent / 100) * (this.years.length - 1));
        this.selectedYear = this.years[index];
    };
    SliderComponent.prototype.handleDrop = function () {
        this.mlbStatsService.selectedYear = this.selectedYear;
    };
    SliderComponent.prototype.setHandle = function (year) {
        var index = this.years.indexOf(year);
        var percent = (index / this.years.length) * 100;
        $('#dot').css('left', percent + '%');
    };
    SliderComponent = __decorate([
        core_1.Component({
            selector: 'app-slider',
            templateUrl: './slider.component.html',
            styleUrls: ['./slider.component.css']
        })
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
//# sourceMappingURL=slider.component.js.map