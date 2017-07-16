"use strict";
var Runner = (function () {
    function Runner(data) {
        this.id = null;
        this.last = null;
        this.number = null;
        this.name_display_roster = null;
        this.first = null;
        this.onBase = null;
        if (data) {
            this.id = data.id;
            this.last = data.last;
            this.number = data.number;
            this.name_display_roster = data.name_display_roster;
            this.first = data.first;
            this.onBase = true;
        }
        else {
            this.onBase = false;
        }
    }
    return Runner;
}());
exports.Runner = Runner;
//# sourceMappingURL=runner.js.map