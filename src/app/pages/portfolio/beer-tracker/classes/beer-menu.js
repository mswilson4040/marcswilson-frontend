"use strict";
var beer_1 = require('./beer');
var beer_information_1 = require('./beer-information');
var BeerMenu = (function () {
    function BeerMenu(_name, _menuObj, completedMenu, icon, untappdReferences) {
        this.beers = new Array();
        var emptyMenu = this.isEmptyMenu(_name, _menuObj);
        if (emptyMenu === true) {
            this.name = '';
            this.beers = [];
            this.icon = '';
        }
        else {
            this.name = _name;
            this.icon = icon;
            var menuLength = typeof _menuObj !== 'undefined' ? _menuObj.length : 0;
            for (var i = 0; i < menuLength; i++) {
                var beer = _menuObj[i];
                this.addBeer(beer['Beer'], beer['Type'], completedMenu, untappdReferences);
            }
        }
    }
    BeerMenu.prototype.isEmptyMenu = function (name, menuObj) {
        if (typeof name === 'undefined' && typeof menuObj === 'undefined') {
            return true;
        }
        else {
            return false;
        }
    };
    BeerMenu.prototype.addBeer = function (beerName, beerType, completedMenu, untappdReferences) {
        var isCompleted = this.name === 'Completed Beers' ? true : this.isBeerCompleted(beerName, completedMenu);
        var referencedData = untappdReferences.filter(function (item) {
            return item['name'] === beerName;
        })[0];
        if (typeof referencedData !== 'undefined') {
            referencedData = {
                hasInfo: false,
                beer: {
                    beer_label: referencedData['label'],
                    rating_score: referencedData['rating'],
                    bid: referencedData['bid']
                }
            };
        }
        this.beers.push(new beer_1.Beer(beerName, beerType, new beer_information_1.BeerInformation(referencedData), isCompleted));
    };
    BeerMenu.prototype.isBeerCompleted = function (name, completedMenu) {
        if (typeof completedMenu === 'undefined') {
            return true;
        }
        else {
            var match = completedMenu.beers.filter(function (beer) {
                return beer.name === name;
            })[0];
            if (typeof match === 'undefined') {
                return false;
            }
            else {
                return true;
            }
        }
    };
    return BeerMenu;
}());
exports.BeerMenu = BeerMenu;
//# sourceMappingURL=beer-menu.js.map