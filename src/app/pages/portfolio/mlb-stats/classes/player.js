"use strict";
var personal_1 = require('./personal');
var pitching_1 = require('./pitching');
var fielding_1 = require('./fielding');
var batting_1 = require('./batting');
var salaries_1 = require('./salaries');
var individual_award_1 = require('./individual-award');
var Player = (function () {
    // </editor-fold>
    function Player(data) {
        // <editor-fold desc="Player Class Properties">
        this.yearID = null;
        this.teamID = null;
        this.lgID = null;
        this.playerID = null;
        this.G_all = null;
        this.GS = null;
        this.G_batting = null;
        this.G_defense = null;
        this.G_p = null;
        this.G_c = null;
        this.G_1b = null;
        this.G_2b = null;
        this.G_3b = null;
        this.G_ss = null;
        this.G_lf = null;
        this.G_cf = null;
        this.G_rf = null;
        this.G_of = null;
        this.G_dh = null;
        this.G_ph = null;
        this.G_pr = null;
        this.personal = null;
        this.pitching = null;
        this.fielding = null;
        this.batting = null;
        this.salaries = null;
        this.individualAwards = null;
        if (data) {
            for (var obj in data) {
                if (data.hasOwnProperty(obj)) {
                    this[obj] = data[obj];
                }
            }
            this.init();
        }
    }
    Player.prototype.init = function () {
        this.personal = this.initPersonal();
        this.pitching = this.initPitching();
        this.fielding = this.initFielding();
        this.batting = this.initBatting();
        this.salaries = this.initSalaries();
        this.individualAwards = this.initIndividualAwards();
    };
    Player.prototype.initPersonal = function () {
        var p = new Array();
        if (this.personal) {
            for (var i = 0; i < this.personal.length; i++) {
                p.push(new personal_1.Personal(this.personal[i]));
            }
        }
        return p;
    };
    Player.prototype.initPitching = function () {
        var p = new Array();
        if (this.pitching) {
            for (var i = 0; i < this.pitching.length; i++) {
                p.push(new pitching_1.Pitching(this.pitching[i]));
            }
        }
        return p;
    };
    Player.prototype.initFielding = function () {
        var f = new Array();
        if (this.fielding) {
            for (var i = 0; i < this.fielding.length; i++) {
                f.push(new fielding_1.Fielding(this.fielding[i]));
            }
        }
        return f;
    };
    Player.prototype.initBatting = function () {
        var b = new Array();
        if (this.batting) {
            for (var i = 0; i < this.batting.length; i++) {
                b.push(new batting_1.Batting(this.batting[i]));
            }
        }
        return b;
    };
    Player.prototype.initSalaries = function () {
        var s = new Array();
        if (this.salaries) {
            for (var i = 0; i < this.salaries.length; i++) {
                s.push(new salaries_1.Salaries(this.salaries[i]));
            }
        }
        return s;
    };
    Player.prototype.initIndividualAwards = function () {
        var ia = new Array();
        if (this.individualAwards) {
            for (var i = 0; i < this.individualAwards.length; i++) {
                ia.push(new individual_award_1.IndividualAward(this.individualAwards[i]));
            }
        }
        return ia;
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=player.js.map