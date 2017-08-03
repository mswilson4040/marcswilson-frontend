"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MlbStatsApi = (function () {
    function MlbStatsApi() {
        var _this = this;
        this.express = null;
        this.request = null;
        this.router = null;
        this.mongodb = null;
        this.DB_PATH = 'mongodb://localhost:27017/mlbstatsdb';
        this.express = require('express');
        this.request = require('request');
        this.mongodb = require('mongodb').MongoClient;
        this.router = this.express.Router();
        this.router.get('/years', function (request, response) {
            _this.getDistinctYears().then(function (years) {
                response.json(years);
            }, function (error) {
                response.json({ success: false, message: error });
            });
        });
        this.router.get('/years/:yearID/teams', function (request, response) {
            var yearID = +request.params.yearID;
            _this.getTeamsByYear(yearID).then(function (teams) {
                response.json(teams);
            }, function (error) {
                response.json({ success: false, message: error });
            });
        });
        this.router.get('/years/:yearID/teams/:teamID', function (request, response) {
            var yearID = +request.params.yearID;
            var teamID = request.params.teamID;
            _this.getTeamByID(yearID, teamID).then(function (team) {
                response.json(team);
            });
        });
        this.router.get('/years/:yearID/players', function (request, response) {
            var yearID = +request.params.yearID;
            _this.getPlayersFromYear(yearID).then(function (players) {
                response.json(players);
            });
        });
        this.router.get('/players/id/:playerID', function (request, response) {
            var playerID = request.params.playerID;
            _this.aggregateFullPlayerStats(playerID).then(function (data) {
                response.json(data);
            });
        });
        this.router.get('/players/name/:playerName', function (request, response) {
            var playerName = request.params.playerName;
            _this.getPlayersByName(playerName).then(function (data) {
                response.json(data);
            });
        });
        this.router.get('/ballparks', function (request, response) {
            _this.getBallparks().then(function (parks) {
                response.json(parks);
            });
        });
        this.router.get('/ballparks/:key', function (request, response) {
            var key = request.params.key;
            _this.getBallparkByKey(key).then(function (park) {
                response.json(park);
            });
        });
        this.router.get('/boxscores/:year/:month/:day', function (request, response) {
            var year = request.params.year;
            var month = request.params.month < 10 ? '0' + +request.params.month : +request.params.month;
            var day = request.params.day < 10 ? '0' + (+request.params.day) : (+request.params.day);
            _this.getBoxScore(year.toString(), month.toString(), day.toString()).then(function (score) {
                response.json(score);
            }, function (error) {
                response.json(error);
            });
        });
        module.exports = this.router;
    }
    MlbStatsApi.prototype.getDistinctYears = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectError, db) {
                var collection = db.collection('teams');
                if (connectError) {
                    reject(connectError);
                }
                else {
                    collection.distinct('yearID', {}).then(function (docs) {
                        resolve(docs);
                        db.close();
                    });
                }
            });
        });
    };
    MlbStatsApi.prototype.getTeamsByYear = function (yearID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                if (connectionError) {
                    reject(connectionError);
                }
                else {
                    var collection = db.collection('teams');
                    collection.find({ yearID: yearID }).toArray(function (queryError, docs) {
                        if (queryError) {
                            reject(queryError);
                            db.close();
                        }
                        else {
                            db.close();
                            resolve(docs);
                        }
                    });
                }
            });
        });
    };
    MlbStatsApi.prototype.getTeamByID = function (yearID, teamID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                if (connectionError) {
                    reject(connectionError);
                }
                else {
                    var collection = db.collection('teams');
                    collection.find({ $and: [{ yearID: yearID }, { teamID: teamID.toUpperCase() }] }).toArray(function (queryError, docs) {
                        if (queryError) {
                            db.close();
                            reject(queryError);
                        }
                        else {
                            db.close();
                            _this.aggregatePlayerData(yearID, docs[0]).then(function (players) {
                                docs[0].players = players;
                                resolve(docs[0]);
                            });
                        }
                    });
                }
            });
        });
    };
    MlbStatsApi.prototype.aggregatePlayerData = function (yearID, team) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                if (connectionError) {
                    db.close();
                    reject(connectionError);
                }
                else {
                    var collection = db.collection('appearances');
                    collection.aggregate([
                        {
                            $match: {
                                $and: [{ yearID: yearID }, { teamID: team.teamID }]
                            }
                        },
                        {
                            $lookup: {
                                from: 'peoples',
                                localField: 'playerID',
                                foreignField: 'playerID',
                                as: 'personal'
                            }
                        },
                        {
                            $lookup: {
                                from: 'fieldings',
                                localField: 'playerID',
                                foreignField: 'playerID',
                                as: 'fielding'
                            }
                        },
                        {
                            $lookup: {
                                from: 'allstarfulls',
                                localField: 'playerID',
                                foreignField: 'playerID',
                                as: 'allstar'
                            }
                        },
                        {
                            $lookup: {
                                from: 'battings',
                                localField: 'playerID',
                                foreignField: 'playerID',
                                as: 'batting'
                            }
                        },
                        {
                            $lookup: {
                                from: 'salaries',
                                localField: 'playerID',
                                foreignField: 'playerID',
                                as: 'salaries'
                            }
                        },
                        {
                            $lookup: {
                                from: 'pitchings',
                                localField: 'playerID',
                                foreignField: 'playerID',
                                as: 'pitching'
                            }
                        },
                        {
                            $lookup: {
                                from: 'awardsplayers',
                                localField: 'playerID',
                                foreignField: 'playerID',
                                as: 'individualAwards'
                            }
                        }
                    ]).toArray(function (queryError, docs) {
                        if (docs && docs.length > 0) {
                            var players = new Array();
                            for (var i = 0; i < docs.length; i++) {
                                docs[i].fielding = docs[i].fielding.filter(function (f) { return f.yearID === yearID && f.teamID === team.teamID; });
                                docs[i].allstar = docs[i].allstar.filter(function (a) { return a.yearID === yearID; });
                                docs[i].batting = docs[i].batting.filter(function (b) { return b.yearID === yearID && b.teamID === team.teamID; });
                                docs[i].salaries = docs[i].salaries.filter(function (s) { return s.yearID === yearID && s.teamID === team.teamID; });
                                docs[i].pitching = docs[i].pitching.filter(function (p) { return p.yearID === yearID && p.teamID === team.teamID; });
                                docs[i].individualAwards = docs[i].individualAwards.filter(function (ia) { return ia.yearID === yearID; });
                                players.push(docs[i]);
                            }
                            resolve(players);
                        }
                        else if (!docs) {
                            reject({ success: false, message: 'mongodb return undefined or null' });
                        }
                        else {
                            reject([]);
                        }
                    });
                }
            });
        });
    };
    MlbStatsApi.prototype.getPlayersFromYear = function (yearID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                if (connectionError) {
                    db.close();
                    reject(connectionError);
                }
                else {
                    var collection = db.collection('appearances');
                    collection.aggregate([
                        {
                            $match: {
                                yearID: yearID
                            }
                        },
                        {
                            $lookup: {
                                from: 'peoples',
                                localField: 'playerID',
                                foreignField: 'playerID',
                                as: 'personal'
                            }
                        }
                    ]).toArray(function (queryError, docs) {
                        if (queryError) {
                            reject(queryError);
                        }
                        else if (docs && docs.length > 0) {
                            var tracker = [];
                            var appearances = [];
                            for (var i = 0; i < docs.length; i++) {
                                if (tracker.indexOf(docs[i].playerID) === -1) {
                                    tracker.push(docs[i].playerID);
                                    appearances.push(docs[i]);
                                }
                            }
                            resolve(appearances);
                        }
                        else {
                            reject({ success: false, message: 'mongodb return undefined or null' });
                        }
                    });
                }
            });
        });
    };
    MlbStatsApi.prototype.aggregateFullPlayerStats = function (playerID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                if (connectionError) {
                    db.close();
                    reject(connectionError);
                }
                else {
                    var collection = db.collection('appearances');
                    collection.aggregate([
                        {
                            $match: {
                                playerID: playerID
                            }
                        },
                        {
                            $lookup: {
                                from: 'peoples',
                                localField: 'playerID',
                                foreignField: 'playerID',
                                as: 'personal'
                            }
                        },
                        {
                            $lookup: {
                                from: 'fieldings',
                                localField: 'playerID',
                                foreignField: 'playerID',
                                as: 'fielding'
                            }
                        },
                        {
                            $lookup: {
                                from: 'allstarfulls',
                                localField: 'playerID',
                                foreignField: 'playerID',
                                as: 'allstar'
                            }
                        },
                        {
                            $lookup: {
                                from: 'battings',
                                localField: 'playerID',
                                foreignField: 'playerID',
                                as: 'batting'
                            }
                        },
                        {
                            $lookup: {
                                from: 'salaries',
                                localField: 'playerID',
                                foreignField: 'playerID',
                                as: 'salaries'
                            }
                        },
                        {
                            $lookup: {
                                from: 'pitchings',
                                localField: 'playerID',
                                foreignField: 'playerID',
                                as: 'pitching'
                            }
                        },
                        {
                            $lookup: {
                                from: 'awardsplayers',
                                localField: 'playerID',
                                foreignField: 'playerID',
                                as: 'individualAwards'
                            }
                        },
                        {
                            $lookup: {
                                from: 'awardsshareplayers',
                                localField: 'playerID',
                                foreignField: 'playerID',
                                as: 'sharedAwards'
                            }
                        },
                        {
                            $lookup: {
                                from: 'collegeplayings',
                                localField: 'playerID',
                                foreignField: 'playerID',
                                as: 'colleges'
                            }
                        },
                        {
                            $lookup: {
                                from: 'teams',
                                localField: 'yearID',
                                foreignField: 'yearID',
                                as: 'teams'
                            }
                        }
                    ]).toArray(function (queryError, docs) {
                        if (docs && docs.length > 0) {
                            var appearances = new Array();
                            var _loop_1 = function (i) {
                                docs[i].fielding = docs[i].fielding.filter(function (f) { return f.yearID === docs[i].yearID; });
                                docs[i].allstar = docs[i].allstar.filter(function (a) { return a.yearID === docs[i].yearID; });
                                docs[i].batting = docs[i].batting.filter(function (b) { return b.yearID === docs[i].yearID; });
                                docs[i].salaries = docs[i].salaries.filter(function (s) { return s.yearID === docs[i].yearID; });
                                docs[i].pitching = docs[i].pitching.filter(function (p) { return p.yearID === docs[i].yearID; });
                                docs[i].individualAwards = docs[i].individualAwards.filter(function (ia) { return ia.yearID === docs[i].yearID; });
                                docs[i].sharedAwards = docs[i].sharedAwards.filter(function (sa) { return sa.yearID === docs[i].yearID; });
                                docs[i].teams = docs[i].teams.filter(function (t) { return t.yearID === docs[i].yearID && t.teamID === docs[i].teamID; });
                                appearances.push(docs[i]);
                            };
                            for (var i = 0; i < docs.length; i++) {
                                _loop_1(i);
                            }
                            resolve(appearances);
                        }
                        else if (!docs) {
                            reject({ success: false, message: 'mongodb return undefined or null' });
                        }
                        else {
                            reject([]);
                        }
                    });
                }
            });
        });
    };
    MlbStatsApi.prototype.getBallparks = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectError, db) {
                var collection = db.collection('parks');
                if (connectError) {
                    reject(connectError);
                }
                else {
                    collection.find().toArray(function (queryError, docs) {
                        if (queryError) {
                            reject(queryError);
                        }
                        else {
                            db.close();
                            resolve(docs);
                        }
                    });
                }
            });
        });
    };
    MlbStatsApi.prototype.getBallparkByKey = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectError, db) {
                var collection = db.collection('parks');
                if (connectError) {
                    reject(connectError);
                }
                else {
                    collection.find({ 'park.key': key }).toArray(function (queryError, docs) {
                        if (queryError) {
                            reject(queryError);
                        }
                        else {
                            db.close();
                            resolve(docs);
                        }
                    });
                }
            });
        });
    };
    MlbStatsApi.prototype.getPlayersByName = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('peoples');
                if (connectionError) {
                    reject(connectionError);
                    db.close();
                }
                else {
                    var split = name.split(' ');
                    if (split.length > 0 && split.length === 1) {
                        collection.find({
                            $or: [
                                { 'nameFirst': { $regex: name, $options: 'i' } },
                                { 'nameLast': { $regex: name, $options: 'i' } }
                            ]
                        }).toArray(function (queryError, docs) {
                            resolve(docs);
                            db.close();
                        });
                    }
                    else {
                        collection.find({
                            $and: [
                                { 'nameFirst': { $regex: split[0], $options: 'i' } },
                                { 'nameLast': { $regex: split[1], $options: 'i' } }
                            ]
                        }).toArray(function (queryError, docs) {
                            resolve(docs);
                            db.close();
                        });
                    }
                }
            });
        });
    };
    MlbStatsApi.prototype.getBoxScore = function (year, month, day) {
        var _this = this;
        var url = "http://gd2.mlb.com/components/game/mlb/year_" + year + "/month_" + month + "/day_" + day + "/master_scoreboard.json";
        return new Promise(function (resolve, reject) {
            _this.request(url, function (err, res, body) {
                var ret = null;
                try {
                    ret = JSON.parse(body);
                }
                catch (ex) {
                    ret = ex;
                }
                finally {
                    if (!err) {
                        resolve(ret);
                    }
                    else {
                        reject(ret);
                    }
                }
            }, function (error) {
                reject(error.message);
            });
        });
    };
    return MlbStatsApi;
}());
exports.MlbStatsApi = MlbStatsApi;
new MlbStatsApi();
//# sourceMappingURL=mlb-stats-api.js.map