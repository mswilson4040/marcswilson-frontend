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
var appearance_1 = require("../classes/appearance");
var mlb_stats_service_1 = require("../services/mlb-stats.service");
var ui_service_1 = require("../../../../shared-services/ui.service");
var MLBPlayersComponent = (function () {
    function MLBPlayersComponent(_mlbStatsService, _uiService) {
        this._mlbStatsService = _mlbStatsService;
        this._uiService = _uiService;
        this.playerName = null;
        this.searchResult = new Array();
        this.selectedPlayer = new Array();
    }
    MLBPlayersComponent.prototype.ngOnInit = function () {
        var selectedPlayer = this._mlbStatsService.selectedPlayer;
        if (selectedPlayer !== null) {
            this.playerName = selectedPlayer.personal[0].fullName;
            this.goToPlayer(selectedPlayer);
        }
        $('#mlbPlayerStatsComponentContainer').fadeIn();
    };
    MLBPlayersComponent.prototype.ngOnDestroy = function () {
    };
    MLBPlayersComponent.prototype.playerChanged = function (val) {
        var _this = this;
        this.selectedPlayer = [];
        $('#appearancesChart').empty();
        if (val && val.length > 3) {
            this._mlbStatsService.getPlayersByName(val).then(function (player) {
                _this.searchResult = player;
            });
        }
    };
    MLBPlayersComponent.prototype.goToPlayer = function (player) {
        var _this = this;
        this._uiService.showOverlay('Fetching Player Stats...');
        this._mlbStatsService.getFullPlayerStats(player).then(function (appearances) {
            appearances = appearances.map(function (a) {
                return new appearance_1.Appearance(a);
            });
            _this.searchResult = [];
            _this.selectedPlayer = appearances;
            var data = _this.buildChartData('batting', 'HR');
            _this.buildChart(data, 'HR');
            _this._uiService.hideOverlay();
        });
    };
    MLBPlayersComponent.prototype.buildChartData = function (node, stat) {
        var ret = this.selectedPlayer.map(function (a) {
            var s = a[node][0];
            if (s) {
                if (a[node][0][stat] === '') {
                    return [a.yearID, 0];
                }
                else {
                    return [a.yearID, a[node][0][stat]];
                }
            }
            else {
                return [a.yearID, 0];
            }
        });
        return ret;
    };
    MLBPlayersComponent.prototype.switchChart = function (node, stat) {
        var data = this.buildChartData(node, stat);
        this.buildChart(data, stat);
    };
    MLBPlayersComponent.prototype.buildChart = function (data, stat) {
        Highcharts.chart('appearancesChart', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Stats for ' + this.selectedPlayer[0].personal[0].fullName
            },
            subtitle: {
                text: 'Source: <a href="https://github.com/chadwickbureau/baseballdatabank" target="_blank">Baseball Databank</a>',
                useHTML: true
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '10px',
                        fontFamily: 'sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Game Wins'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: stat + ': <b>{point.y}</b>'
            },
            series: [{
                    name: 'Game Wins',
                    data: data,
                }]
        });
    };
    MLBPlayersComponent.prototype.toggleActive = function (evt) {
        $('#yearTabsContainer').find('.active').removeClass('active');
        $(evt.currentTarget).addClass('active');
    };
    MLBPlayersComponent = __decorate([
        core_1.Component({
            selector: 'app-mlbplayers',
            templateUrl: './mlbplayers.component.html',
            styleUrls: ['./mlbplayers.component.scss']
        }),
        __metadata("design:paramtypes", [mlb_stats_service_1.MlbStatsService, ui_service_1.UIService])
    ], MLBPlayersComponent);
    return MLBPlayersComponent;
}());
exports.MLBPlayersComponent = MLBPlayersComponent;
//# sourceMappingURL=mlbplayers.component.js.map