"use strict";
var line_score_1 = require('./line-score');
var base_runners_1 = require('./base-runners');
var game_status_1 = require('./game-status');
var Game = (function () {
    function Game(data) {
        this.linescore = new line_score_1.LineScore();
        this.home_team_name = null;
        this.home_name_abbrev = null;
        this.away_team_name = null;
        this.away_name_abbrev = null;
        this.away_time = null;
        this.away_time_zone = null;
        this.runners_on_base = new base_runners_1.BaseRunners();
        this.status = new game_status_1.GameStatus();
        if (data) {
            this.linescore = new line_score_1.LineScore(data.linescore);
            this.home_team_name = data.home_team_name;
            this.home_name_abbrev = data.home_name_abbrev;
            this.away_team_name = data.away_team_name;
            this.away_name_abbrev = data.away_name_abbrev;
            this.status = new game_status_1.GameStatus(data.status);
            this.away_time = data.away_time;
            this.away_time_zone = data.away_time_zone;
            this.runners_on_base = new base_runners_1.BaseRunners(data.runners_on_base);
        }
    }
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map