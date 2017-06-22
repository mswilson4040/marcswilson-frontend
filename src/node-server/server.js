/**
 * Created by Marc on 12/16/2016.
 */
"use strict";
var MLBStatsAPIFile = require('./mlb-stats-api');
var PowerballAPIFile = require('./powerball-api');
var Server = (function () {
    function Server(express, app, bodyParser, path, server, cors) {
        var _this = this;
        if (express === void 0) { express = null; }
        if (app === void 0) { app = null; }
        if (bodyParser === void 0) { bodyParser = null; }
        if (path === void 0) { path = null; }
        if (server === void 0) { server = null; }
        if (cors === void 0) { cors = null; }
        this.express = express;
        this.app = app;
        this.bodyParser = bodyParser;
        this.path = path;
        this.server = server;
        this.cors = cors;
        this.cors = require('cors');
        this.express = require('express');
        this.app = this.express();
        this.bodyParser = require('body-parser');
        this.path = require('path');
        this.server = require('http').createServer(this.app);
        this.app.listen(process.env.PORT || 3000);
        this.app.use(this.bodyParser.urlencoded({ extended: true }));
        this.app.use(this.bodyParser.json());
        this.app.use(this.express.static(this.path.join(__dirname + '/../')));
        this.app.use(this.cors());
        this.app.use('/api/mlbstats', MLBStatsAPIFile);
        this.app.use('/api/powerball', PowerballAPIFile);
        // this.app.use('/api/yelp', require('./public/shared/apis/yelp.api'));
        this.app.get('/*', function (req, res) {
            res.sendFile(_this.path.join(__dirname + '/../index.html'));
        });
    }
    return Server;
}());
new Server();
//# sourceMappingURL=server.js.map