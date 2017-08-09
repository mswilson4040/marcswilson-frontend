"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var team_1 = require("../classes/team");
var player_1 = require("../classes/player");
var http_1 = require("@angular/http");
var game_1 = require("../classes/boxscores/game");
var MlbStatsService = (function () {
    function MlbStatsService(http) {
        this.http = http;
        this.selectedYear$ = new BehaviorSubject_1.BehaviorSubject(1977);
        this.selectedTeam$ = new BehaviorSubject_1.BehaviorSubject(null);
        this.selectedPlayer$ = new BehaviorSubject_1.BehaviorSubject(null);
        this.API_PATH = null;
        var loc = window.location.origin;
        if (loc.indexOf('localhost') > -1) {
            this.API_PATH = 'http://localhost:3000/api/mlbstats/';
        }
        else {
            this.API_PATH = 'http://marcswilson.com/api/mlbstats/';
        }
    }
    Object.defineProperty(MlbStatsService.prototype, "selectedYear", {
        get: function () {
            return this.selectedYear$.getValue();
        },
        set: function (value) {
            if (value !== null) {
                this.selectedYear$.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MlbStatsService.prototype, "selectedTeam", {
        get: function () {
            return this.selectedTeam$.getValue();
        },
        set: function (value) {
            if (value !== null) {
                this.selectedTeam$.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MlbStatsService.prototype, "selectedPlayer", {
        get: function () {
            return this.selectedPlayer$.getValue();
        },
        set: function (value) {
            if (value !== null) {
                this.selectedPlayer$.next(value);
            }
            else {
                this.selectedPlayer$.next(null);
            }
        },
        enumerable: true,
        configurable: true
    });
    MlbStatsService.prototype.getDistinctYears = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_PATH + 'years').subscribe(function (years) {
                var ret = JSON.parse(years['_body']);
                resolve(ret);
            });
        });
    };
    MlbStatsService.prototype.getTeamColorsJSON = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/public/pages/PortfolioComponent/MLBStats/data/teamcolors.json').subscribe(function (json) {
                json = JSON.parse(json['_body']);
                resolve(json);
            });
        });
    };
    MlbStatsService.prototype.getTeamsByYear = function (yearID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_PATH + 'years/' + yearID + '/teams').subscribe(function (teams) {
                var parsed = JSON.parse(teams['_body']);
                var ts = parsed.map(function (t) {
                    return new team_1.Team(t);
                });
                resolve(ts);
            });
        });
    };
    MlbStatsService.prototype.getTeamByYear = function (yearID, team) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_PATH + 'years/' + yearID + '/teams/' + team.teamID).subscribe(function (t) {
                t = JSON.parse(t['_body']);
                var theTeam = new team_1.Team(t);
                resolve(theTeam);
            });
        });
    };
    MlbStatsService.prototype.getPlayersByName = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_PATH + 'players/name/' + name).subscribe(function (personal) {
                var ret = JSON.parse(personal['_body']);
                resolve(ret);
            });
        });
    };
    MlbStatsService.prototype.getPlayersByYear = function (yearID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_PATH + "years/" + yearID + "/players").subscribe(function (players) {
                var body = JSON.parse(players['_body']);
                var retPlayers = body.map(function (p) {
                    return new player_1.Player(p);
                });
                resolve(retPlayers);
            });
        });
    };
    MlbStatsService.prototype.getFullPlayerStats = function (player) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_PATH + 'players/id/' + player.playerID).subscribe(function (appearances) {
                var ret = JSON.parse(appearances['_body']);
                resolve(ret);
            });
        });
    };
    MlbStatsService.prototype.getAllBallparks = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_PATH + 'ballparks').subscribe(function (ballparks) {
                var ret = JSON.parse(ballparks['_body']);
                resolve(ret);
            });
        });
    };
    MlbStatsService.prototype.getBoxScores = function (date) {
        var _this = this;
        var url = this.API_PATH + "boxscores/" + date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
        return new Promise(function (resolve, reject) {
            _this.http.get(url).subscribe(function (bs) {
                var obj = JSON.parse(bs['_body']);
                var ret = new Array();
                if (obj.hasOwnProperty('data')) {
                    ret = obj.data.games.game.map(function (g) {
                        return new game_1.Game(g);
                    });
                }
                resolve(ret);
            }, function (error) {
                reject(error);
            });
        });
    };
    MlbStatsService.prototype.setSelectedTeam = function (team) {
        this.selectedTeam = team;
    };
    MlbStatsService.prototype.setSelectedPlayer = function (player) {
        this.selectedPlayer = player;
    };
    MlbStatsService.prototype.setSelectedYear = function (year) {
        this.selectedYear = year;
    };
    MlbStatsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MlbStatsService);
    return MlbStatsService;
}());
exports.MlbStatsService = MlbStatsService;
//# sourceMappingURL=mlb-stats.service.js.map