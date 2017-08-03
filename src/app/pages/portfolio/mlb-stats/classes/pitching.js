"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pitching = (function () {
    // </editor-fold>
    function Pitching(data) {
        // <editor-fold desc="Pitching class properties">
        this.playerID = null;
        this.yearID = null;
        this.stint = null;
        this.teamID = null;
        this.lgID = null;
        this.W = null;
        this.L = null;
        this.G = null;
        this.GS = null;
        this.CG = null;
        this.SHO = null;
        this.SV = null;
        this.IPouts = null;
        this.H = null;
        this.ER = null;
        this.HR = null;
        this.BB = null;
        this.SO = null;
        this.BAOpp = null;
        this.ERA = null;
        this.IBB = null;
        this.WP = null;
        this.HBP = null;
        this.BK = null;
        this.BFP = null;
        this.GF = null;
        this.R = null;
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
    return Pitching;
}());
exports.Pitching = Pitching;
//# sourceMappingURL=pitching.js.map