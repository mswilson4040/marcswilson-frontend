"use strict";
var personal_1 = require('./personal');
var fielding_1 = require('./fielding');
var batting_1 = require('./batting');
var pitching_1 = require('./pitching');
var individual_award_1 = require('./individual-award');
var team_1 = require('./team');
var all_star_1 = require('./all-star');
var salaries_1 = require('./salaries');
var shared_award_1 = require('./shared-award');
var college_1 = require('./college');
var Appearance = (function () {
    // </editor-fold>
    function Appearance(data) {
        // <editor-fold desc="Appearance class properties">
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
        this.fielding = null;
        this.allstar = null;
        this.batting = null;
        this.salaries = null;
        this.pitching = null;
        this.individualAwards = null;
        this.sharedAwards = null;
        this.colleges = null;
        this.teams = null;
        if (data) {
            for (var obj in data) {
                if (data.hasOwnProperty(obj)) {
                    this[obj] = data[obj];
                }
            }
            this.init();
        }
    }
    Appearance.prototype.init = function () {
        this.personal = this.initPersonal();
        this.fielding = this.initFielding();
        this.allstar = this.initAllStar();
        this.batting = this.initBatting();
        this.salaries = this.initSalaries();
        this.pitching = this.initPitching();
        this.individualAwards = this.initIndividualAwards();
        this.sharedAwards = this.initSharedAwards();
        this.colleges = this.initColleges();
        this.teams = this.initTeams();
    };
    Appearance.prototype.initPersonal = function () {
        var p = new Array();
        if (this.personal) {
            for (var i = 0; i < this.personal.length; i++) {
                p.push(new personal_1.Personal(this.personal[i]));
            }
        }
        return p;
    };
    Appearance.prototype.initFielding = function () {
        var f = new Array();
        if (this.fielding) {
            for (var i = 0; i < this.fielding.length; i++) {
                f.push(new fielding_1.Fielding(this.fielding[i]));
            }
        }
        return f;
    };
    Appearance.prototype.initAllStar = function () {
        var a = new Array();
        if (this.allstar) {
            for (var i = 0; i < this.allstar.length; i++) {
                a.push(new all_star_1.AllStar(this.allstar[i]));
            }
        }
        return a;
    };
    Appearance.prototype.initBatting = function () {
        var b = new Array();
        if (this.batting) {
            for (var i = 0; i < this.batting.length; i++) {
                b.push(new batting_1.Batting(this.batting[i]));
            }
        }
        return b;
    };
    Appearance.prototype.initSalaries = function () {
        var s = new Array();
        if (this.salaries) {
            for (var i = 0; i < this.salaries.length; i++) {
                s.push(new salaries_1.Salaries(this.salaries[i]));
            }
        }
        return s;
    };
    Appearance.prototype.initPitching = function () {
        var p = new Array();
        if (this.pitching) {
            for (var i = 0; i < this.pitching.length; i++) {
                p.push(new pitching_1.Pitching(this.pitching[i]));
            }
        }
        return p;
    };
    Appearance.prototype.initIndividualAwards = function () {
        var a = new Array();
        if (this.individualAwards) {
            for (var i = 0; i < this.individualAwards.length; i++) {
                a.push(new individual_award_1.IndividualAward(this.individualAwards[i]));
            }
        }
        return a;
    };
    Appearance.prototype.initSharedAwards = function () {
        var a = new Array();
        if (this.sharedAwards) {
            for (var i = 0; i < this.sharedAwards.length; i++) {
                a.push(new shared_award_1.SharedAward(this.sharedAwards[i]));
            }
        }
        return a;
    };
    Appearance.prototype.initColleges = function () {
        var c = new Array();
        if (this.colleges) {
            for (var i = 0; i < this.colleges.length; i++) {
                c.push(new college_1.College(this.colleges[i]));
            }
        }
        return c;
    };
    Appearance.prototype.initTeams = function () {
        var t = new Array();
        if (this.teams) {
            for (var i = 0; i < this.teams.length; i++) {
                t.push(new team_1.Team(this.teams[i]));
            }
        }
        return t;
    };
    return Appearance;
}());
exports.Appearance = Appearance;
//# sourceMappingURL=appearance.js.map