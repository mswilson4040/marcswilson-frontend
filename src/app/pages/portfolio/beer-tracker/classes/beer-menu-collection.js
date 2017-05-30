"use strict";
var beer_menu_1 = require('./beer-menu');
var BeerMenuCollection = (function () {
    function BeerMenuCollection(_completedBeers, _liveBeers, _incompleteBeers, _untappdReferences) {
        this.menus = new Array();
        _untappdReferences = typeof _untappdReferences === 'undefined' ? [] : _untappdReferences;
        if (typeof _completedBeers !== 'undefined' && typeof _liveBeers !== 'undefined') {
            this.addMenu(new beer_menu_1.BeerMenu('Completed Beers', _completedBeers, new beer_menu_1.BeerMenu(), 'fa-check', _untappdReferences));
            this.addMenu(new beer_menu_1.BeerMenu('Live Beers', _liveBeers, this.getMenuByName('Completed Beers'), 'fa-beer', _untappdReferences));
            this.addMenu(new beer_menu_1.BeerMenu('Incomplete Beers', _incompleteBeers, new beer_menu_1.BeerMenu(), 'fa-times', _untappdReferences));
        }
    }
    BeerMenuCollection.prototype.addMenu = function (beerMenu) {
        this.menus.push(beerMenu);
    };
    BeerMenuCollection.prototype.getMenuByName = function (name) {
        try {
            return this.menus.filter(function (menu) {
                return menu.name === name;
            })[0];
        }
        catch (ex) {
            return new beer_menu_1.BeerMenu();
        }
    };
    return BeerMenuCollection;
}());
exports.BeerMenuCollection = BeerMenuCollection;
//# sourceMappingURL=beer-menu-collection.js.map