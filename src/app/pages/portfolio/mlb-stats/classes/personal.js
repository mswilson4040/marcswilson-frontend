"use strict";
var Personal = (function () {
    //</editor-fold>
    function Personal(data) {
        //<editor-fold desc="Personal Class Properties">
        this.playerID = null;
        this.birthYear = null;
        this.birthMonth = null;
        this.birthDay = null;
        this.age = null;
        this.birthCountry = null;
        this.birthState = null;
        this.birthCity = null;
        this.deathYear = null;
        this.deathMonth = null;
        this.deathDay = null;
        this.deathCountry = null;
        this.deathState = null;
        this.deathCity = null;
        this.nameFirst = null;
        this.nameLast = null;
        this.nameGiven = null;
        this.fullName = null;
        this.weight = null;
        this.height = null;
        this.bats = null;
        this.throws = null;
        this.debut = null;
        this.finalGame = null;
        if (data) {
            for (var obj in data) {
                this[obj] = data[obj];
            }
            this.init();
        }
    }
    Personal.prototype.init = function () {
        this.age = this.getAge(this.birthMonth, this.birthDay, this.birthYear);
        this.fullName = this.getFullName(this.nameFirst, this.nameLast);
    };
    Personal.prototype.getAge = function (month, day, year) {
        if (month && day && year) {
            var birthday = new Date(year, (month - 1), day);
            var ageDiffMonth = Date.now() - birthday.getTime();
            var ageDate = new Date(ageDiffMonth);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
        else {
            return null;
        }
    };
    Personal.prototype.getFullName = function (nameFirst, nameLast) {
        if (nameFirst && nameLast) {
            return nameFirst + " " + nameLast;
        }
    };
    return Personal;
}());
exports.Personal = Personal;
//# sourceMappingURL=personal.js.map