"use strict";
var BeerTrackerAPI = (function () {
    function BeerTrackerAPI(express, request, router, mongoose) {
        var _this = this;
        if (express === void 0) { express = null; }
        if (request === void 0) { request = null; }
        if (router === void 0) { router = null; }
        if (mongoose === void 0) { mongoose = null; }
        this.express = express;
        this.request = request;
        this.router = router;
        this.mongoose = mongoose;
        this.express = require('express');
        this.mongoose = require('mongoose').createConnection('mongodb://localhost:27017/beerdb');
        this.request = require('request');
        this.router = this.express.Router();
        this.mongoose.Promise = global.Promise;
        // this.mongoose.createConnection('mongodb://localhost:27017/beerdb');
        this.mongoose.model('completedbeers', {
            Beer: String,
            Type: String,
            Completed: Date,
            UserId: String
        });
        this.mongoose.model('untappdreferencetables', {
            name: String,
            type: String,
            bid: String,
            label: String,
            rating: String
        });
        this.router.get('/getLiveMenu', function (req, response) {
            _this.request({
                uri: 'http://taphousegrill.com/beer.html'
            }, function (error, res, body) {
                response.send(body);
            });
        });
        this.router.post('/getCompletedBeers', function (req, response) {
            var id = req.body.id;
            _this.mongoose.model('completedbeers').find({ UserId: id }).then(function (docs) {
                response.send(docs);
            });
        });
        this.router.post('/getUntappdInfo', function (req, response) {
            var CLIENT_ID = '1EF2EBEFE49E9C8DC2332D2048650835E6124FF0';
            var CLIENT_SECRET = '2A46ADB02931766AAE9FE3258234B1E00C5C3408';
            var beerName = req.body.beer.name;
            _this.request({
                uri: 'https://api.untappd.com/v4/search/beer?q=' + beerName + '&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
            }, function (error, res, body) {
                response.send(body);
            });
        });
        this.router.post('/getUntappdInfoByBID', function (req, response) {
            var CLIENT_ID = '1EF2EBEFE49E9C8DC2332D2048650835E6124FF0';
            var CLIENT_SECRET = '2A46ADB02931766AAE9FE3258234B1E00C5C3408';
            var bid = req.body.bid;
            _this.request({
                uri: 'https://api.untappd.com/v4/beer/info/' + bid + '?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
            }, function (error, res, body) {
                response.send(body);
            });
        });
        this.router.get('/getUntappdReferenceTable', function (req, response) {
            _this.mongoose.model('untappdreferencetables').find().then(function (docs) {
                response.send(docs);
            });
        });
        this.router.post('/setUntappdReference', function (req, response) {
            _this.mongoose.model('untappdreferencetables').update({
                name: req.body.name
            }, {
                $set: {
                    name: req.body.name,
                    type: req.body.type,
                    bid: req.body.bid,
                    label: req.body.label,
                    rating: req.body.rating
                }
            }, {
                upsert: true
            }).then(function (res) {
                response.send(res);
            });
        });
        this.router.post('/toggleCompleteState', function (req, response) {
            var status = !req.body.beer.completed;
            var userId = req.body.userId;
            if (status === true) {
                _this.mongoose.model('completedbeers').update({
                    Beer: req.body.beer.name
                }, {
                    $set: {
                        Beer: req.body.beer.name,
                        UserId: userId,
                        Type: req.body.beer.type,
                        Completed: new Date()
                    }
                }, {
                    upsert: true
                }).then(function (res) {
                    response.send(status);
                });
            }
            else {
                _this.mongoose.model('completedbeers').remove({
                    Beer: request.body.beer.name,
                    UserId: userId
                }).then(function (res) {
                    response.send(status);
                });
            }
        });
        module.exports = this.router;
    }
    return BeerTrackerAPI;
}());
exports.BeerTrackerAPI = BeerTrackerAPI;
new BeerTrackerAPI();
//# sourceMappingURL=beer-tracker-api.js.map