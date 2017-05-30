"use strict";
var Ballpark = (function () {
    // </editor-fold>
    function Ballpark(data) {
        // <editor-fold desc="Ballpark class properties">
        this.park = null;
        this.city = null;
        this.state = null;
        this.country = null;
        if (data) {
            for (var obj in data) {
                if (data.hasOwnProperty(obj)) {
                    this[obj] = data[obj];
                }
            }
            this.init();
        }
    }
    Ballpark.prototype.init = function () {
        this.initPark();
    };
    Ballpark.prototype.initPark = function () {
        var p = new Park();
        if (this.park) {
            p = new Park(this.park);
        }
        return p;
    };
    return Ballpark;
}());
exports.Ballpark = Ballpark;
var Park = (function () {
    // </editor-fold>
    function Park(data) {
        // <editor-fold desc="Park class properties">
        this.key = null;
        this.name = null;
        this.alias = null;
        if (data) {
            for (var obj in data) {
                if (data.hasOwnProperty(obj)) {
                    this[obj] = data[obj];
                }
            }
        }
    }
    return Park;
}());
exports.Park = Park;
//# sourceMappingURL=ballpark.js.map