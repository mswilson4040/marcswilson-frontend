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
var http_1 = require("@angular/http");
var environment_1 = require("../../../../../environments/environment");
var company_1 = require("../classes/company");
var TimeTrackerService = (function () {
    function TimeTrackerService(_http) {
        this._http = _http;
        this.API_PATH = environment_1.environment.API_PATH + "/timetracker";
    }
    TimeTrackerService.prototype.addCompany = function (company) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post(_this.API_PATH + "/addcompany", { company: company }).subscribe(function (_companies) {
                try {
                    var companies = JSON.parse(_companies['_body']).map(function (c) { return new company_1.Company(c); });
                    resolve(companies);
                }
                catch (err) {
                    reject(err.message);
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    TimeTrackerService.prototype.addProject = function (company, project) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post(_this.API_PATH + "/addproject", { company: company, project: project }).subscribe(function (_projects) {
                var projects = JSON.parse(_projects['_body']).map(function (p) { return new company_1.Project(p); });
                resolve(projects);
            }, function (error) {
                reject(error);
            });
        });
    };
    TimeTrackerService.prototype.addEntry = function (company, entry) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post(_this.API_PATH + "/company/addentry", { company: company, entry: entry }).subscribe(function (_entries) {
                var entries = JSON.parse(_entries['_body']);
                resolve(entries);
            }, function (error) {
                reject(error);
            });
        });
    };
    TimeTrackerService.prototype.getCompanies = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.get(_this.API_PATH + "/companies").subscribe(function (_companies) {
                try {
                    var companies = JSON.parse(_companies['_body']).map(function (c) { return new company_1.Company(c); });
                    resolve(companies);
                }
                catch (ex) {
                    reject(ex);
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    TimeTrackerService.prototype.getProjectsByCompany = function (company) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.get(_this.API_PATH + "/projects/" + company._id).subscribe(function (response) {
                var projects = JSON.parse(response['_body']).map(function (p) { return new company_1.Project(p); });
                resolve(projects);
            }, function (error) {
                reject(error);
            });
        });
    };
    TimeTrackerService.prototype.getEntriesByCompany = function (company) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.get(_this.API_PATH + "/company/entries/" + company._id).subscribe(function (_entries) {
                try {
                    var entries = JSON.parse(_entries['_body']).map(function (e) { return new company_1.Entry(e); });
                    resolve(entries);
                }
                catch (ex) {
                    reject(ex);
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    TimeTrackerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TimeTrackerService);
    return TimeTrackerService;
}());
exports.TimeTrackerService = TimeTrackerService;
//# sourceMappingURL=time-tracker.service.js.map