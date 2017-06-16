"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var MlbStatsService = (function () {
    function MlbStatsService(http) {
        this.http = http;
        this.selectedYear$ = new BehaviorSubject_1.BehaviorSubject(1871);
        this.selectedTeam$ = new BehaviorSubject_1.BehaviorSubject(null);
        this.selectedPlayer$ = new BehaviorSubject_1.BehaviorSubject(null);
        this.API_PATH = 'http://localhost:3000/api/mlbstats/';
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
                years = JSON.parse(years['_body']);
                resolve(years);
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
                teams = JSON.parse(teams['_body']);
                resolve(teams);
            });
        });
    };
    MlbStatsService.prototype.getTeamByYear = function (yearID, team) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_PATH + 'years/' + yearID + '/teams/' + team.teamID).subscribe(function (t) {
                resolve(t);
            });
        });
    };
    MlbStatsService.prototype.getPlayerIdByName = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_PATH + 'players/name/' + name).subscribe(function (playerID) {
                playerID = JSON.parse(playerID['_body']);
                resolve(playerID);
            });
        });
    };
    MlbStatsService.prototype.getFullPlayerStats = function (player) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_PATH + 'players/id/' + player.playerID).subscribe(function (appearances) {
                appearances = JSON.parse(appearances['_body']);
                resolve(appearances);
            });
        });
    };
    MlbStatsService.prototype.getAllBallparks = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_PATH + 'ballparks').subscribe(function (ballparks) {
                ballparks = JSON.parse(ballparks['_body']);
                resolve(ballparks);
            });
        });
    };
    MlbStatsService.prototype.setSelectedTeam = function (team) {
        this.selectedTeam = team;
    };
    MlbStatsService.prototype.setSelectedPlayer = function (player) {
        this.selectedPlayer = player;
    };
    MlbStatsService = __decorate([
        core_1.Injectable()
    ], MlbStatsService);
    return MlbStatsService;
}());
exports.MlbStatsService = MlbStatsService;
//# sourceMappingURL=mlb-stats.service.js.map