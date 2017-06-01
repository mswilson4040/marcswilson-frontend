"use strict";
var beer_information_1 = require('./beer-information');
var Beer = (function () {
    function Beer(_name, _type, _info, _completed) {
        this.beer_label = '';
        this.rating_score = '';
        if (typeof _name !== 'undefined' && typeof _type !== 'undefined' && typeof _info !== 'undefined' && typeof _completed !== 'undefined') {
            this.name = _name;
            this.type = _type;
            this.info = _info;
            this.completed = _completed;
        }
        else {
            this.name = '';
            this.type = '';
            this.info = new beer_information_1.BeerInformation();
            this.completed = false;
        }
    }
    return Beer;
}());
exports.Beer = Beer;
//# sourceMappingURL=beer.js.map