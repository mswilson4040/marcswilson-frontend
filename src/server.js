/**
 * Created by Marc on 12/16/2016.
 */
"use strict";
var BeerTrackerAPIFile = require('../src/app/pages/portfolio/beer-tracker/apis/beer-tracker-api');
var MLBStatsAPIFile = require('../src/app/pages/portfolio/mlb-stats/apis/mlb-stats-api');
var Server = (function () {
    function Server(express, app, bodyParser, path, server) {
        var _this = this;
        if (express === void 0) { express = null; }
        if (app === void 0) { app = null; }
        if (bodyParser === void 0) { bodyParser = null; }
        if (path === void 0) { path = null; }
        if (server === void 0) { server = null; }
        this.express = express;
        this.app = app;
        this.bodyParser = bodyParser;
        this.path = path;
        this.server = server;
        this.express = require('express');
        this.app = this.express();
        this.bodyParser = require('body-parser');
        this.path = require('path');
        this.server = require('http').createServer(this.app);
        this.app.listen(process.env.PORT || 3000);
        this.app.use(this.bodyParser.urlencoded({ extended: true }));
        this.app.use(this.bodyParser.json());
        this.app.use(this.express.static(__dirname));
        this.app.use('/api/mlbstats', MLBStatsAPIFile);
        // this.app.use('/api/yelp', require('./public/shared/apis/yelp.api'));
        this.app.use('/api/beertracker', BeerTrackerAPIFile);
        this.app.get('/*', function (req, res) {
            res.sendFile(_this.path.join(__dirname + '/index.html'));
        });
    }
    return Server;
}());
new Server();
//# sourceMappingURL=server.js.map