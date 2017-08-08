"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MlbStatsApi = require("./mlb-stats-api");
var PowerballAPI = require("./powerball-api");
var AuthAPI = require("./auth-api");
var EmailAPI = require("./email-api");
var Server = (function () {
    function Server(express, app, bodyParser, path, server, cors, dotenv) {
        if (express === void 0) { express = null; }
        if (app === void 0) { app = null; }
        if (bodyParser === void 0) { bodyParser = null; }
        if (path === void 0) { path = null; }
        if (server === void 0) { server = null; }
        if (cors === void 0) { cors = null; }
        if (dotenv === void 0) { dotenv = null; }
        var _this = this;
        this.express = express;
        this.app = app;
        this.bodyParser = bodyParser;
        this.path = path;
        this.server = server;
        this.cors = cors;
        this.dotenv = dotenv;
        this.cors = require('cors');
        this.express = require('express');
        this.app = this.express();
        this.bodyParser = require('body-parser');
        this.path = require('path');
        this.dotenv = require('dotenv').config({ path: 'server.env' });
        this.server = require('http').createServer(this.app);
        this.app.listen(process.env.PORT || 3000);
        this.app.use(this.bodyParser.urlencoded({ extended: true }));
        this.app.use(this.bodyParser.json());
        this.app.use(this.express.static(this.path.join(__dirname + '/../')));
        this.app.use(this.cors());
        this.app.use('/api/mlbstats', MlbStatsApi);
        this.app.use('/api/powerball', PowerballAPI);
        this.app.use('/api/auth', AuthAPI);
        this.app.use('/api/email', EmailAPI);
        this.app.get('/*', function (req, res) {
            res.sendFile(_this.path.join(__dirname + '/../index.html'));
        });
    }
    return Server;
}());
new Server();
//# sourceMappingURL=server.js.map