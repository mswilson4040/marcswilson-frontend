"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AllStar = (function () {
    // </editor-fold>
    function AllStar(data) {
        // <editor-fold desc="AllStar class properties">
        this.playerID = null;
        this.yearID = null;
        this.gameNum = null;
        this.gameID = null;
        this.teamID = null;
        this.GP = null;
        this.startingPos = null;
        if (data) {
            for (var obj in data) {
                if (data.hasOwnProperty(obj)) {
                    this[obj] = data[obj];
                }
            }
        }
    }
    return AllStar;
}());
exports.AllStar = AllStar;
//# sourceMappingURL=all-star.js.map