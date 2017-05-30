"use strict";
var Fielding = (function () {
    // </editor-fold>
    function Fielding(data) {
        // <editor-fold desc="Fielding class properties">
        this.playerID = null;
        this.yearID = null;
        this.stint = null;
        this.teamID = null;
        this.lgID = null;
        this.POS = null;
        this.G = null;
        this.GS = null;
        this.InnOuts = null;
        this.PO = null;
        this.A = null;
        this.E = null;
        this.DP = null;
        this.PB = null;
        this.WP = null;
        this.SB = null;
        this.CS = null;
        this.ZR = null;
        if (data) {
            for (var obj in data) {
                if (data.hasOwnProperty(obj)) {
                    this[obj] = data[obj];
                }
            }
        }
    }
    return Fielding;
}());
exports.Fielding = Fielding;
//# sourceMappingURL=fielding.js.map