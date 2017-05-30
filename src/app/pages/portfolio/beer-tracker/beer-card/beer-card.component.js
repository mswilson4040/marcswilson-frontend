"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BeerCardComponent = (function () {
    function BeerCardComponent(beerTrackerService, uiService) {
        this.beerTrackerService = beerTrackerService;
        this.uiService = uiService;
    }
    BeerCardComponent.prototype.ngOnInit = function () {
    };
    BeerCardComponent.prototype.showBeerInfo = function (beer) {
        this.beerTrackerService.showBeerInfoDialog(beer);
    };
    BeerCardComponent.prototype.toggleCardOverlay = function (evt) {
        var overlay = $(evt.currentTarget).parent().find('.overlay-container');
        overlay.toggle('fade', {}, 100);
    };
    BeerCardComponent.prototype.toggleCompleteState = function (beer) {
        var _this = this;
        if (!beer.completed === false) {
            this.uiService.showDialog('Confirm Action...', 'Are you sure you want to mark ' + beer.name + ' as incomplete?', function (result) {
                if (result === true) {
                    _this.beerTrackerService.toggleCompleteState(beer).then(function (data) {
                    });
                }
            });
        }
        else {
            this.beerTrackerService.toggleCompleteState(beer).then(function (data) {
            });
        }
    };
    __decorate([
        core_1.Input()
    ], BeerCardComponent.prototype, "beer");
    BeerCardComponent = __decorate([
        core_1.Component({
            selector: 'app-beer-card',
            templateUrl: './beer-card.component.html',
            styleUrls: ['./beer-card.component.css']
        })
    ], BeerCardComponent);
    return BeerCardComponent;
}());
exports.BeerCardComponent = BeerCardComponent;
//# sourceMappingURL=beer-card.component.js.map