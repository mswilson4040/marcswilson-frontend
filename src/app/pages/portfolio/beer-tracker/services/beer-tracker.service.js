"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var beer_menu_collection_1 = require('../classes/beer-menu-collection');
var beer_menu_1 = require('../classes/beer-menu');
var beer_1 = require('../classes/beer');
var beer_information_1 = require('../classes/beer-information');
var BeerTrackerService = (function () {
    function BeerTrackerService(http) {
        this.http = http;
        this.beerMenuCollection$ = new BehaviorSubject_1.BehaviorSubject(new beer_menu_collection_1.BeerMenuCollection());
        this.activeMenu$ = new BehaviorSubject_1.BehaviorSubject(new beer_menu_1.BeerMenu());
        this.beerInfo$ = new BehaviorSubject_1.BehaviorSubject(new beer_1.Beer());
    }
    Object.defineProperty(BeerTrackerService.prototype, "beerMenuCollection", {
        set: function (value) {
            if (value !== null) {
                this.beerMenuCollection$.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BeerTrackerService.prototype, "activeMenu", {
        set: function (value) {
            if (value !== null) {
                this.activeMenu$.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BeerTrackerService.prototype, "beerInfo", {
        set: function (value) {
            if (value !== null) {
                this.beerInfo$.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    BeerTrackerService.prototype.showBeerInfoDialog = function (beer) {
        this.beerInfo = beer;
    };
    BeerTrackerService.prototype.buildBeerMenuCollection = function (id) {
        var _this = this;
        var completedBeers;
        var liveBeers;
        var incompleteBeers;
        var untappdReferences;
        return new Promise(function (resolve, reject) {
            Promise.all([_this.getLiveMenu(), _this.getCompletedBeers('10153584464812091'), _this.getUntappdReferenceTable()]).then(function (responses) {
                liveBeers = responses[0];
                completedBeers = responses[1];
                incompleteBeers = _this.buildIncompleteBeersList(liveBeers, completedBeers);
                untappdReferences = responses[2];
                resolve(new beer_menu_collection_1.BeerMenuCollection(completedBeers, liveBeers, incompleteBeers, untappdReferences));
            }, function (error) {
                reject(error);
            });
        });
    };
    BeerTrackerService.prototype.buildIncompleteBeersList = function (liveBeers, completedBeers) {
        var liveBeerLength = liveBeers.length;
        var ret = new Array();
        var _loop_1 = function(i) {
            var liveBeer = liveBeers[i];
            var matched = completedBeers.filter(function (beer) {
                return beer['Beer'] === liveBeer['Beer'];
            })[0];
            if (typeof matched === 'undefined') {
                ret.push(liveBeer);
            }
        };
        for (var i = 0; i < liveBeerLength; i++) {
            _loop_1(i);
        }
        return ret;
    };
    BeerTrackerService.prototype.getLiveMenu = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/api/beertracker/getLiveMenu').subscribe(function (pageSource) {
                try {
                    var ret = [];
                    var ps = pageSource['_body'].replace(/img[^>]*/g, '').replace('*', '');
                    var html = $.parseHTML(ps);
                    var menuDiv = $(html).find('.TabbedPanelsContent')[0];
                    var types = $(menuDiv).find('h2');
                    for (var i = 0; i < types.length; i++) {
                        var type = $(types[i]);
                        var typeName = type.text();
                        var brEls = type.next().find('br');
                        for (var j = 0; j < brEls.length; j++) {
                            var el = brEls[j];
                            if (el.nextSibling) {
                                var beerName = $(el.nextSibling).text().trim();
                                if (beerName !== '' && beerName !== 'With Extra Hops') {
                                    ret.push({ Type: typeName, Beer: beerName });
                                }
                            }
                        }
                    }
                    resolve(ret);
                }
                catch (ex) {
                    console.log(ex);
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    BeerTrackerService.prototype.getCompletedBeers = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/api/beertracker/getCompletedBeers', { id: id }).subscribe(function (completedBeers) {
                var body = JSON.parse(completedBeers['_body']);
                resolve(body);
            }, function (error) {
                reject(error);
            });
        });
    };
    BeerTrackerService.prototype.getUntappdInfo = function (beer) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/api/beertracker/getUntappdInfo', { beer: beer }).subscribe(function (info) {
                var body = info['_body'];
                body = JSON.parse(body);
                resolve(body);
            }, function (error) {
                reject(error);
            });
        });
    };
    BeerTrackerService.prototype.getUntappdInfoByBID = function (bid, beer) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/api/beertracker/getUntappdInfoByBID', { bid: bid }).subscribe(function (info) {
                var body = info['_body'];
                body = JSON.parse(body);
                var beerInfo = new beer_information_1.BeerInformation(body.response);
                _this.setUntappdReference(beer.name, beer.type, beerInfo['bid'], beerInfo['beer_label'], beerInfo['rating_score']).then(function (info) {
                    beer['info'] = beerInfo;
                    // this.refreshBeerMenuCollection();
                    resolve(beerInfo);
                });
            });
        });
    };
    BeerTrackerService.prototype.getUntappdReferenceTable = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/api/beertracker/getUntappdReferenceTable').subscribe(function (data) {
                var body = JSON.parse(data['_body']);
                resolve(body);
            });
        });
    };
    BeerTrackerService.prototype.setUntappdReference = function (name, type, bid, label, rating) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/api/beertracker/setUntappdReference', {
                name: name,
                type: type,
                bid: bid,
                label: label,
                rating: rating
            }).subscribe(function (info) {
                resolve();
            });
        });
    };
    BeerTrackerService.prototype.toggleCompleteState = function (beer) {
        var _this = this;
        var userId = '10153584464812091';
        return new Promise(function (resolve, reject) {
            _this.http.post('/api/beertracker/toggleCompleteState', { beer: beer, userId: userId }).subscribe(function (data) {
                beer.completed = !beer.completed;
                _this.refreshBeerMenuCollection();
                resolve(beer);
            });
        });
    };
    BeerTrackerService.prototype.refreshBeerMenuCollection = function () {
        var _this = this;
        this.buildBeerMenuCollection('10153584464812091').then(function (bmc) {
            _this.beerMenuCollection = bmc;
        });
    };
    BeerTrackerService.prototype.setActiveMenu = function (beerMenu) {
        this.activeMenu = beerMenu;
    };
    BeerTrackerService = __decorate([
        core_1.Injectable()
    ], BeerTrackerService);
    return BeerTrackerService;
}());
exports.BeerTrackerService = BeerTrackerService;
//# sourceMappingURL=beer-tracker.service.js.map