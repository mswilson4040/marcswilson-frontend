"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var College = (function () {
    // </editor-fold>
    function College(data) {
        // <editor-fold desc="Colleges class properties">
        this.playerID = null;
        this.schoolID = null;
        this.yearID = null;
        if (data) {
            for (var obj in data) {
                if (data.hasOwnProperty(obj)) {
                    this[obj] = data[obj];
                }
            }
        }
    }
    return College;
}());
exports.College = College;
//# sourceMappingURL=college.js.map