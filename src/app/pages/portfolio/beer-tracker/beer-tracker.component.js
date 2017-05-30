"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var beer_menu_1 = require('./classes/beer-menu');
var BeerTrackerComponent = (function () {
    function BeerTrackerComponent(uiService, beerTrackerService) {
        var _this = this;
        this.uiService = uiService;
        this.beerTrackerService = beerTrackerService;
        this.activeMenu = new beer_menu_1.BeerMenu();
        this.beerTypes = new Array();
        this.beerTrackerService.activeMenu$.subscribe(function (activeMenu) {
            _this.activeMenu = activeMenu;
        });
        this.beerTrackerService.beerMenuCollection$.subscribe(function (bmc) {
            _this.beerMenuCollection = bmc;
            if (_this.activeMenu.name !== '') {
                _this.activeMenu = _this.beerMenuCollection.menus.filter(function (menu) {
                    return menu.name === _this.activeMenu.name;
                })[0];
            }
            setTimeout(function () { _this.fadeInBeerCards(); }, 500);
        });
    }
    BeerTrackerComponent.prototype.ngOnInit = function () {
        this.fetchBeerMenu('10153584464812091');
    };
    BeerTrackerComponent.prototype.fetchBeerMenu = function (id) {
        var _this = this;
        this.uiService.showOverlay('Fetching Beer Menu...');
        this.beerTrackerService.buildBeerMenuCollection(id).then(function (beerMenuCollection) {
            _this.uiService.hideOverlay();
            _this.beerMenuCollection = beerMenuCollection;
            _this.activeMenu = _this.beerMenuCollection.menus[1];
            _this.beerTypes = _this.getBeerTypesFromMenu(_this.activeMenu);
            _this.beerTrackerService.beerMenuCollection = _this.beerMenuCollection;
            setTimeout(function () { _this.fadeInBeerCards(); }, 500);
        }, function (error) {
            alert('error');
        });
    };
    BeerTrackerComponent.prototype.searchBeerMenu = function (evt) {
        var term = $(evt.currentTarget).val().toLowerCase();
        var searchMenu = this.getMenuByName(this.activeMenu.name);
        var newBeerMenu = new beer_menu_1.BeerMenu();
        newBeerMenu.name = searchMenu.name;
        newBeerMenu.icon = searchMenu.icon;
        newBeerMenu.beers = searchMenu.beers;
        if (term && term !== '') {
            newBeerMenu.beers = searchMenu.beers.filter(function (beer) {
                return beer.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
            });
            this.beerTrackerService.setActiveMenu(newBeerMenu);
        }
        else {
            this.beerTrackerService.setActiveMenu(searchMenu);
        }
        // TODO: Shouldn't have to do a setTimeout here. display: none is conflicting with display
        setTimeout(function () {
            $('.beer-card-container').show();
        });
    };
    BeerTrackerComponent.prototype.filterBeerMenu = function (type) {
        var filterMenu = this.getMenuByName(this.activeMenu.name);
        var newBeerMenu = new beer_menu_1.BeerMenu();
        newBeerMenu.name = filterMenu.name;
        newBeerMenu.icon = filterMenu.icon;
        newBeerMenu.beers = filterMenu.beers;
        if (type && type !== 'Clear Filter') {
            newBeerMenu.beers = filterMenu.beers.filter(function (beer) {
                return beer.type.toLowerCase() === type.toLowerCase();
            });
            this.beerTrackerService.setActiveMenu(newBeerMenu);
        }
        else {
            this.beerTrackerService.setActiveMenu(filterMenu);
        }
        // TODO: Shouldn't have to do a setTimeout here. display: none is conflicting with display
        setTimeout(function () {
            $('.beer-card-container').show();
        });
    };
    BeerTrackerComponent.prototype.sortBeerMenuByBeerName = function (evt, order) {
        $(evt.currentTarget).parent().find('.button-active').removeClass('button-active');
        $(evt.currentTarget).addClass('button-active');
        this.activeMenu.beers = this.activeMenu.beers.sort(function (a, b) {
            if (order === 'asc') {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
            }
            else {
                if (a.name > b.name) {
                    return -1;
                }
                if (a.name < b.name) {
                    return 1;
                }
            }
            return 0;
        });
        // TODO: Shouldn't have to do a setTimeout here. display: none is conflicting with display
        setTimeout(function () {
            $('.beer-card-container').show();
        });
    };
    BeerTrackerComponent.prototype.switchBeerMenu = function (beerMenu) {
        var _this = this;
        $('.button-active').removeClass('button-active');
        this.beerTrackerService.setActiveMenu(beerMenu);
        this.beerTypes = this.getBeerTypesFromMenu(beerMenu);
        setTimeout(function () { _this.fadeInBeerCards(); }, 500);
    };
    BeerTrackerComponent.prototype.fadeInBeerCards = function () {
        var beerCardInner = $('.beer-card-container');
        var delay = 100;
        $(beerCardInner).each(function (index, item) {
            $(item).delay(delay).fadeIn('slow');
            delay += 150;
        });
    };
    BeerTrackerComponent.prototype.getMenuByName = function (name) {
        return this.beerMenuCollection.menus.filter(function (menu) {
            return menu.name === name;
        })[0];
    };
    BeerTrackerComponent.prototype.getBeerTypesFromMenu = function (beerMenu) {
        var ret = ['Clear Filter'];
        for (var i = 0; i < beerMenu.beers.length; i++) {
            var type = beerMenu.beers[i].type;
            if (ret.indexOf(type) === -1) {
                ret.push(type);
            }
        }
        return ret;
    };
    BeerTrackerComponent = __decorate([
        core_1.Component({
            selector: 'app-beer-tracker',
            templateUrl: './beer-tracker.component.html',
            styleUrls: ['./beer-tracker.component.css']
        })
    ], BeerTrackerComponent);
    return BeerTrackerComponent;
}());
exports.BeerTrackerComponent = BeerTrackerComponent;
//# sourceMappingURL=beer-tracker.component.js.map