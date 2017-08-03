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
var forms_1 = require("@angular/forms");
var ui_service_1 = require("../../../shared-services/ui.service");
var http_1 = require("@angular/http");
var team_1 = require("../mlb-stats/classes/team");
var mlb_stats_service_1 = require("../mlb-stats/services/mlb-stats.service");
require("rxjs/add/operator/startWith");
require("rxjs/add/operator/map");
var MlbApiExplorerComponent = (function () {
    function MlbApiExplorerComponent(_http, _uiService, _mlbStatsService) {
        var _this = this;
        this._http = _http;
        this._uiService = _uiService;
        this._mlbStatsService = _mlbStatsService;
        this.URL_ROOT = this.getUrlRoot();
        this.path = null;
        this.teams = new Array();
        this.selectedTeam = new team_1.Team();
        this.selectedTeamYear = 1977;
        this.endpointSelected = false;
        this.picker = null;
        this.selectedPlayersYear = 1977;
        this.players = new Array();
        this.selectedPlayer = null;
        this.team = new forms_1.FormControl();
        this.playerYear = new forms_1.FormControl();
        this.player = new forms_1.FormControl();
        this._uiService.showOverlay('Fetching seasons...');
        this._mlbStatsService.getDistinctYears().then(function (years) {
            _this.years = years;
            _this.filteredTeams = _this.team.valueChanges.startWith(null).map(function (t) { return _this.filterTeams(t); });
            _this.filteredPlayerYears = _this.playerYear.valueChanges.startWith(null).map(function (y) { return _this.filterYears(y); });
            _this.filteredPlayers = _this.player.valueChanges.startWith(null).map(function (p) { return _this.filterPlayers(p); });
            _this._uiService.hideOverlay();
        });
    }
    MlbApiExplorerComponent.prototype.teamYearSelected = function (evt) {
        var _this = this;
        this.selectedTeamYear = evt.source.value;
        this._mlbStatsService.getTeamsByYear(this.selectedTeamYear).then(function (teams) {
            _this.teams = teams;
        });
    };
    MlbApiExplorerComponent.prototype.teamSelected = function (team) {
        var _this = this;
        this.selectedTeam = team;
        if (this.selectedTeam) {
            this._mlbStatsService.getTeamByYear(this.selectedTeamYear, this.selectedTeam).then(function (t) {
                _this.path = _this.URL_ROOT + "api/mlbstats/years/" + _this.selectedTeamYear + "/teams/" + team.teamID;
            });
        }
    };
    MlbApiExplorerComponent.prototype.filterTeams = function (team) {
        if (team) {
            var res = this.teams.filter(function (t) {
                return t.name.toLowerCase().indexOf(team.toLowerCase()) === 0;
            });
            return res;
        }
        else {
            return this.teams;
        }
    };
    MlbApiExplorerComponent.prototype.playersYearSelected = function (evt) {
        var _this = this;
        this.selectedPlayersYear = evt.source.value;
        this._mlbStatsService.getPlayersByYear(this.selectedPlayersYear).then(function (players) {
            _this.players = players;
        });
    };
    MlbApiExplorerComponent.prototype.filterYears = function (year) {
        if (year) {
            var res = this.years.filter(function (y) {
                return y.toString().indexOf(year.toString()) === 0;
            });
            return res;
        }
        else {
            return this.years;
        }
    };
    MlbApiExplorerComponent.prototype.filterPlayers = function (player) {
        if (player && this.players.length > 0) {
            var res = this.players.filter(function (p) {
                return p.personal[0].fullName.toLowerCase().indexOf(player.toLowerCase()) === 0;
            });
            return res;
        }
        else {
            return this.players;
        }
    };
    MlbApiExplorerComponent.prototype.playerSelected = function (player) {
        this.selectedPlayer = player;
        if (this.selectedPlayer !== null) {
            this.path = this.URL_ROOT + "api/mlbstats/players/id/" + this.selectedPlayer.playerID;
        }
    };
    MlbApiExplorerComponent.prototype.ngOnInit = function () {
        this.path = this.URL_ROOT;
    };
    MlbApiExplorerComponent.prototype.getUrlRoot = function () {
        var rootUrl = window.location.href;
        var root = rootUrl.toString().replace('4200', '3000');
        var regex = new RegExp(/^.*\//);
        return regex.exec(root).toString();
    };
    MlbApiExplorerComponent.prototype.fetchAPIResult = function () {
        var _this = this;
        if (this.path !== this.URL_ROOT) {
            this._uiService.showOverlay('Fetching API Results...');
            this._http.get(this.path).subscribe(function (response) {
                var jObj = JSON.parse(response['_body']);
                $('#results')['jsonViewer'](jObj);
                _this._uiService.hideOverlay();
            });
        }
        else {
        }
    };
    MlbApiExplorerComponent.prototype.boxscoresDateChanged = function (date) {
        this.picker = date;
        var year = this.picker.getFullYear();
        var month = this.picker.getMonth() + 1;
        var day = this.picker.getDate();
        this.path = this.URL_ROOT + "api/mlbstats/boxscores/" + year + "/" + month + "/" + day;
    };
    MlbApiExplorerComponent.prototype.getAllBallparks = function () {
        this.path = this.URL_ROOT + 'api/mlbstats/ballparks';
    };
    MlbApiExplorerComponent = __decorate([
        core_1.Component({
            selector: 'app-mlb-api-explorer',
            templateUrl: './mlb-api-explorer.component.html',
            styleUrls: ['./mlb-api-explorer.component.scss']
        }),
        __metadata("design:paramtypes", [http_1.Http, ui_service_1.UIService, mlb_stats_service_1.MlbStatsService])
    ], MlbApiExplorerComponent);
    return MlbApiExplorerComponent;
}());
exports.MlbApiExplorerComponent = MlbApiExplorerComponent;
//# sourceMappingURL=mlb-api-explorer.component.js.map