"use strict";
var Salaries = (function () {
    // </editor-fold>
    function Salaries(data) {
        // <editor-fold desc="Salaries class properties">
        this.yearID = null;
        this.teamID = null;
        this.lgID = null;
        this.playerID = null;
        this.salary = null;
        if (data) {
            for (var obj in data) {
                if (data.hasOwnProperty(obj)) {
                    this[obj] = data[obj];
                }
            }
        }
    }
    return Salaries;
}());
exports.Salaries = Salaries;
//# sourceMappingURL=salaries.js.map