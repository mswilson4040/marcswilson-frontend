"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SharedAward = (function () {
    // </editor-fold>
    function SharedAward(data) {
        // <editor-fold desc="SharedAwards class properties">
        this.awardID = null;
        this.yearID = null;
        this.lgID = null;
        this.playerID = null;
        this.pointsWon = null;
        this.pointsMax = null;
        this.votesFirst = null;
        if (data) {
            for (var obj in data) {
                if (data.hasOwnProperty(obj)) {
                    this[obj] = data[obj];
                }
            }
        }
    }
    return SharedAward;
}());
exports.SharedAward = SharedAward;
//# sourceMappingURL=shared-award.js.map