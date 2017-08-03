"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PowerballData = (function () {
    function PowerballData() {
        this.drawings = new Array();
    }
    PowerballData.prototype.addDrawing = function (drawing) {
        this.drawings.push(drawing);
        return this.drawings;
    };
    PowerballData.prototype.getHighchartsData = function () {
        var numbersObj = { name: 'Numbers', data: this.getNumbersHitCountArray(), color: '#cf0a2c' };
        var powerballObj = { name: 'Powerball', data: this.getPowerballsHitCountArray(), color: '#cf0a2c' };
        return [numbersObj, powerballObj];
    };
    PowerballData.prototype.getNumbersHitCountArray = function () {
        var hash = this.initHash();
        var ret = [];
        for (var i = 0; i < this.drawings.length; i++) {
            var numbers = this.drawings[i].convertNumbersToArray();
            for (var j = 0; j < numbers.length; j++) {
                hash[numbers[j].toString()] += 1;
            }
        }
        for (var obj in hash) {
            if (hash.hasOwnProperty(obj)) {
                ret.push(hash[obj]);
            }
        }
        return ret;
    };
    PowerballData.prototype.getPowerballsHitCountArray = function () {
        var hash = this.initHash();
        var ret = [];
        for (var i = 0; i < this.drawings.length; i++) {
            var pb = this.drawings[i].powerball;
            hash[pb.toString()] += 1;
        }
        for (var obj in hash) {
            if (hash.hasOwnProperty(obj)) {
                ret.push(hash[obj]);
            }
        }
        return ret;
    };
    PowerballData.prototype.initHash = function () {
        var hash = {};
        for (var i = 1; i < 70; i++) {
            hash[i.toString()] = 0;
        }
        return hash;
    };
    return PowerballData;
}());
exports.PowerballData = PowerballData;
//# sourceMappingURL=powerball-data.js.map