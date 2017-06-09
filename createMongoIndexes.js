/**
 * Created by Marc on 6/8/2017.
 */
/**
 * Created by Marc on 4/7/2017.
 *
 * -- To run, type 'node createMongoIndexes' into termainal
 */
var CreateMongoDBIndexes = (function () {
    function CreateMongoDBIndexes() {
        this.mongodb = null;
        this.readonly = DB_PATH = 'mongodb://localhost:27017/mlbstatsdb';
        this.mongodb = require('mongodb').MongoClient;
        this.createIndexes();
    }
    CreateMongoDBIndexes.prototype.createIndexes = function () {
        var promiseArray = [
            this.allStarFulls(),
            this.appearances(),
            this.awardsManagers(),
            this.awardsShareManagers(),
            this.awardsSharePlayers(),
            this.battingPosts(),
            this.battings(),
            this.collegePlayings(),
            this.fieldingOFS(),
            this.fieldingOFSplits(),
            this.fieldingPosts(),
            this.fieldings(),
            this.hallOfFames(),
            this.homeGames(),
            this.managers(),
            this.managersHalfs(),
            this.peoples(),
            this.pitchingPosts(),
            this.pitchings(),
            this.salaries(),
            this.seriesPosts(),
            this.teams(),
            this.teamsHalfs()
        ];
        Promise.all(promiseArray).then(function (results) {
            console.log(results);
        });
    };
    CreateMongoDBIndexes.prototype.allStarFulls = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('allstarfulls');
                collection.createIndex({ playerID: 1, yearID: 1, teamID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.appearances = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('appearances');
                collection.createIndex({ playerID: 1, yearID: 1, teamID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.awardsManagers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('awardsmanagers');
                collection.createIndex({ playerID: 1, yearID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.awardsShareManagers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('awardssharemanagers');
                collection.createIndex({ playerID: 1, yearID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.awardsSharePlayers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('awardsshareplayers');
                collection.createIndex({ playerID: 1, yearID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.battingPosts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('battingposts');
                collection.createIndex({ playerID: 1, yearID: 1, teamID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.battings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('battings');
                collection.createIndex({ playerID: 1, yearID: 1, teamID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.collegePlayings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('collegeplayings');
                collection.createIndex({ playerID: 1, yearID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.fieldingOFS = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('fieldingofs');
                collection.createIndex({ playerID: 1, yearID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.fieldingOFSplits = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('fieldingofsplits');
                collection.createIndex({ playerID: 1, yearID: 1, teamID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.fieldingPosts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('fieldingposts');
                collection.createIndex({ playerID: 1, yearID: 1, teamID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.fieldings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('fieldings');
                collection.createIndex({ playerID: 1, yearID: 1, teamID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.hallOfFames = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('halloffames');
                collection.createIndex({ playerID: 1, yearID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.homeGames = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('homegames');
                collection.createIndex({ 'year.key': 1, 'team.key': 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.managers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('managers');
                collection.createIndex({ playerID: 1, yearID: 1, teamID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.managersHalfs = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('managershalfs');
                collection.createIndex({ playerID: 1, yearID: 1, teamID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.peoples = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('peoples');
                collection.createIndex({ playerID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.pitchingPosts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('pitchingposts');
                collection.createIndex({ playerID: 1, yearID: 1, teamID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.pitchings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('pitchings');
                collection.createIndex({ playerID: 1, yearID: 1, teamID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.salaries = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('salaries');
                collection.createIndex({ playerID: 1, yearID: 1, teamID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.seriesPosts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('seriesposts');
                collection.createIndex({ yearID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.teams = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('teams');
                collection.createIndex({ yearID: 1, teamID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    CreateMongoDBIndexes.prototype.teamsHalfs = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongodb.connect(_this.DB_PATH, function (connectionError, db) {
                var collection = db.collection('teamshalfs');
                collection.createIndex({ playerID: 1, yearID: 1, teamID: 1 }, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                });
                db.close();
            });
        });
    };
    return CreateMongoDBIndexes;
}());
new CreateMongoDBIndexes();
//# sourceMappingURL=createMongoIndexes.js.map