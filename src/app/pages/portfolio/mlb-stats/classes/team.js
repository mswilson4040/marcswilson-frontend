"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var Team = (function () {
    // </editor-fold>
    function Team(data) {
        // <editor-fold desc="Team Class Properties">
        this.yearID = null;
        this.lgID = null;
        this.teamID = null;
        this.franchID = null;
        this.divID = null;
        this.Rank = null;
        this.G = null;
        this.Ghome = null;
        this.W = null;
        this.L = null;
        this.DivWin = null;
        this.WCWin = null;
        this.LgWin = null;
        this.WSWin = null;
        this.R = null;
        this.AB = null;
        this['2B'] = null;
        this['3B'] = null;
        this.HR = null;
        this.BB = null;
        this.SO = null;
        this.SB = null;
        this.CS = null;
        this.HBP = null;
        this.SF = null;
        this.RA = null;
        this.ER = null;
        this.ERA = null;
        this.CG = null;
        this.SHO = null;
        this.SV = null;
        this.IPouts = null;
        this.HA = null;
        this.HRA = null;
        this.BBA = null;
        this.SOA = null;
        this.E = null;
        this.DP = null;
        this.FP = null;
        this.name = null;
        this.park = null;
        this.attendance = null;
        this.BPF = null;
        this.PPF = null;
        this.teamIDBR = null;
        this.teamIDlahman45 = null;
        this.teamIDretro = null;
        this.totalTeamSalary = null;
        this.players = null;
        if (data) {
            for (var obj in data) {
                if (data.hasOwnProperty(obj)) {
                    this[obj] = data[obj];
                }
            }
            this.init();
        }
    }
    Team.prototype.init = function () {
        this.totalTeamSalary = this.getTotalTeamSalary();
        this.initPlayers();
    };
    Team.prototype.initPlayers = function () {
        if (this.players !== null) {
            this.players = this.players.map(function (p) {
                return new player_1.Player(p);
            });
        }
    };
    Team.prototype.getTotalTeamSalary = function () {
        if (this.players) {
            var sal = 0;
            for (var i = 0; i < this.players.length; i++) {
                var p = this.players[i];
                if (p && p.salaries.length > 0) {
                    sal += p.salaries[0].salary;
                }
            }
            return sal;
        }
        else {
            return 0;
        }
    };
    return Team;
}());
exports.Team = Team;
//# sourceMappingURL=team.js.map