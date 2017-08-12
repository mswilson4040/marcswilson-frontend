"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var company_1 = require("../classes/company");
var TimeTrackerService = (function () {
    function TimeTrackerService() {
        this.companies = new Array();
    }
    TimeTrackerService.prototype.getCompanies = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.companies = new Array();
            for (var i = 0; i < 15; i++) {
                _this.companies.push(new company_1.Company({ name: "Company " + i }));
            }
            if (_this.companies) {
                resolve(_this.companies);
            }
            else {
                reject(new Error('No Companies'));
            }
        });
    };
    TimeTrackerService.prototype.addCompany = function (company) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (company !== null) {
                    _this.companies.push(company);
                }
                resolve(_this.companies);
            }
            catch (ex) {
                reject(ex);
            }
        });
    };
    TimeTrackerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], TimeTrackerService);
    return TimeTrackerService;
}());
exports.TimeTrackerService = TimeTrackerService;
//# sourceMappingURL=time-tracker.service.js.map