"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Powerball = (function () {
    function Powerball(_rawObject) {
        if (_rawObject === void 0) { _rawObject = null; }
        this._rawObject = _rawObject;
        this.date = null;
        this.first = null;
        this.second = null;
        this.third = null;
        this.fourth = null;
        this.fifth = null;
        this.powerball = null;
        if (this._rawObject !== null) {
            this.date = this.parseDate(this._rawObject.draw_date);
            this.parseNumbers(this._rawObject.winning_numbers);
        }
    }
    Powerball.prototype.parseDate = function (date) {
        if (date) {
            return new Date(date);
        }
        else {
            return null;
        }
    };
    Powerball.prototype.parseNumbers = function (numbers) {
        var nums = numbers.split(' ');
        if (nums.length === 6) {
            this.first = +nums[0];
            this.second = +nums[1];
            this.third = +nums[2];
            this.fourth = +nums[3];
            this.fifth = +nums[4];
            this.powerball = +nums[5];
        }
    };
    Powerball.prototype.convertNumbersToArray = function () {
        return [this.first, this.second, this.third, this.fourth, this.fifth];
    };
    return Powerball;
}());
exports.Powerball = Powerball;
//# sourceMappingURL=powerball.js.map