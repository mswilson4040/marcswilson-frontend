"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LineScore = (function () {
    function LineScore(data) {
        this.r = { home: 0, away: 0, diff: 0 };
        if (data) {
            this.r.home = data.r.home;
            this.r.away = data.r.away;
            this.r.diff = data.r.diff;
        }
    }
    return LineScore;
}());
exports.LineScore = LineScore;
//# sourceMappingURL=line-score.js.map