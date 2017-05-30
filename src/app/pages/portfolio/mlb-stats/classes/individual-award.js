"use strict";
var IndividualAward = (function () {
    // </editor-fold>
    function IndividualAward(data) {
        // <editor-fold desc="IndividualAwards class properties">
        this.playerID = null;
        this.awardID = null;
        this.yearID = null;
        this.lgID = null;
        this.tie = null;
        this.notes = null;
        if (data) {
            for (var obj in data) {
                if (data.hasOwnProperty(obj)) {
                    this[obj] = data[obj];
                }
            }
        }
    }
    return IndividualAward;
}());
exports.IndividualAward = IndividualAward;
//# sourceMappingURL=individual-award.js.map