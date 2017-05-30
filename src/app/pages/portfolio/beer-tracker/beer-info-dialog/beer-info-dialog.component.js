"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var beer_1 = require('../classes/beer');
var beer_information_1 = require('../classes/beer-information');
var BeerInfoDialogComponent = (function () {
    function BeerInfoDialogComponent(beerTrackerService, uiService) {
        var _this = this;
        this.beerTrackerService = beerTrackerService;
        this.uiService = uiService;
        this.beer = new beer_1.Beer();
        this.searchResults = { results: [], activePage: 0 };
        this.readMoreExpanded = false;
        this.searchResultExpanded = false;
        this.beerTrackerService.beerInfo$.subscribe(function (beer) {
            _this.beer = beer;
            _this.showDialog(beer);
        });
    }
    BeerInfoDialogComponent.prototype.ngOnInit = function () {
    };
    BeerInfoDialogComponent.prototype.showDialog = function (info) {
        var _this = this;
        this.uiService.showOverlay('Querying Untappd...');
        this.readMoreExpanded = false;
        this.searchResults = { results: [], activePage: 0 };
        this.searchResultExpanded = false;
        if (typeof info['info']['bid'] !== 'undefined') {
            this.beerTrackerService.getUntappdInfoByBID(info['info']['bid'], info).then(function (bi) {
                _this.uiService.hideOverlay();
                $('#dlgBeerInfo').modal('show');
            });
        }
        else {
            this.uiService.hideOverlay();
            $('#dlgBeerInfo').modal('show');
        }
    };
    BeerInfoDialogComponent.prototype.showFullDetails = function (evt) {
        this.readMoreExpanded = true;
    };
    BeerInfoDialogComponent.prototype.getUntappdInfo = function (beer) {
        var _this = this;
        this.uiService.showOverlay('Querying Untappd...');
        this.beerTrackerService.getUntappdInfo(beer).then(function (info) {
            var results = info['response']['beers']['items'];
            var pages = [];
            var page = [];
            for (var i = 0; i < results.length; i++) {
                results[i].beer.brewery = results[i].brewery;
                var item = new beer_1.Beer(results[i].beer.beer_name, beer.type, new beer_information_1.BeerInformation(results[i]), beer.completed);
                page.push(item);
                if (page.length === 3 || i === results.length - 1) {
                    pages.push(page);
                    page = [];
                }
            }
            _this.searchResults = { results: pages, activePage: 0 };
            console.log(_this.searchResults);
            _this.uiService.hideOverlay();
        });
    };
    BeerInfoDialogComponent.prototype.nextPage = function () {
        var pageNum = this.searchResults['activePage'];
        if (pageNum + 1 < this.searchResults['results'].length) {
            this.searchResults['activePage'] = pageNum + 1;
        }
    };
    BeerInfoDialogComponent.prototype.previousPage = function () {
        var pageNum = this.searchResults['activePage'];
        if (pageNum > 0) {
            this.searchResults['activePage'] = pageNum - 1;
        }
    };
    BeerInfoDialogComponent.prototype.toggleResult = function (evt) {
        $(evt.currentTarget).toggleClass('rotate-180');
        var cardBlock = $(evt.currentTarget).closest('.card').find('.card-block');
        cardBlock.toggle('slide', { direction: 'up' }, 300);
    };
    BeerInfoDialogComponent.prototype.addUntappdInfo = function (beer, info) {
        var _this = this;
        this.uiService.showOverlay('Add beer information to ' + beer.name);
        var bid = info['bid'];
        this.beerTrackerService.getUntappdInfoByBID(bid, beer).then(function (bi) {
            _this.uiService.hideOverlay();
        });
    };
    BeerInfoDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-beer-info-dialog',
            templateUrl: './beer-info-dialog.component.html',
            styleUrls: ['./beer-info-dialog.component.css']
        })
    ], BeerInfoDialogComponent);
    return BeerInfoDialogComponent;
}());
exports.BeerInfoDialogComponent = BeerInfoDialogComponent;
//# sourceMappingURL=beer-info-dialog.component.js.map