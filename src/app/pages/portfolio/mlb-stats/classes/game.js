"use strict";
var line_score_1 = require('./line-score');
var status_1 = require('./status');
var Game = (function () {
    function Game(data) {
        this.linescore = new line_score_1.LineScore();
        this.status = new status_1.Status();
        this.homeTeamName = null;
        this.homeTeamNameAbbr = null;
        this.awayTeamName = null;
        this.awayTeamNameAbbr = null;
        if (data) {
            this.linescore = new line_score_1.LineScore(data.linescore);
            this.homeTeamName = data.home_team_name;
            this.homeTeamNameAbbr = data.home_name_abbrev;
            this.awayTeamName = data.away_team_name;
            this.awayTeamNameAbbr = data.away_name_abbrev;
            this.status = new status_1.Status(data.status);
        }
    }
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map