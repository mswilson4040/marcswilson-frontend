"use strict";
var Batting = (function () {
    // </editor-fold>
    function Batting(data) {
        // <editor-fold desc="Batting class properties">
        this.playerID = null;
        this.yearID = null;
        this.stint = null;
        this.teamID = null;
        this.lgID = null;
        this.G = null;
        this.AB = null;
        this.R = null;
        this.H = null;
        this['2B'] = null;
        this['3B'] = null;
        this.HR = null;
        this.RBI = null;
        this.SB = null;
        this.CS = null;
        this.BB = null;
        this.SO = null;
        this.IBB = null;
        this.HBP = null;
        this.SH = null;
        this.SF = null;
        this.GIDP = null;
        if (data) {
            for (var obj in data) {
                if (data.hasOwnProperty(obj)) {
                    this[obj] = data[obj];
                }
            }
        }
    }
    return Batting;
}());
exports.Batting = Batting;
//# sourceMappingURL=batting.js.map