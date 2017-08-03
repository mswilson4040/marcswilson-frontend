"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameStatus = (function () {
    function GameStatus(data) {
        this.is_no_hitter = null;
        this.top_inning = null;
        this.s = null;
        this.b = null;
        this.reason = null;
        this.ind = null;
        this.status = null;
        this.is_perfect_game = null;
        this.o = null;
        this.inning = null;
        this.inning_state = null;
        this.note = null;
        if (data) {
            this.is_no_hitter = data.is_no_hitter;
            this.top_inning = data.top_inning;
            this.s = data.s;
            this.b = data.b;
            this.reason = data.reason;
            this.ind = data.ind;
            this.status = data.status;
            this.is_perfect_game = data.is_perfect_game;
            this.o = data.o;
            this.inning = this.formatInning(data.inning);
            this.inning_state = data.inning_state;
            this.note = data.note;
        }
    }
    GameStatus.prototype.formatInning = function (inning) {
        var num = +inning;
        var j = num % 10;
        var k = num % 100;
        if (j === 1 && k !== 11) {
            return inning + 'st';
        }
        if (j === 2 && k !== 12) {
            return inning + 'nd';
        }
        if (j === 3 && k !== 13) {
            return inning + 'rd';
        }
        return inning + 'th';
    };
    return GameStatus;
}());
exports.GameStatus = GameStatus;
//# sourceMappingURL=game-status.js.map