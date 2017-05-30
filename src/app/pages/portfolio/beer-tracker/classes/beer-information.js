"use strict";
var BeerInformation = (function () {
    function BeerInformation(info) {
        if (typeof info !== 'undefined') {
            this.hasInfo = info.hasOwnProperty('hasInfo') === true ? info['hasInfo'] : true;
            var bi = info['beer'];
            for (var obj in bi) {
                if (bi.hasOwnProperty(obj)) {
                    this[obj] = bi[obj];
                }
            }
        }
        else {
            this.hasInfo = false;
            this['beer_label'] = 'https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png';
            this['rating_score'] = 0;
        }
    }
    return BeerInformation;
}());
exports.BeerInformation = BeerInformation;
//# sourceMappingURL=beer-information.js.map