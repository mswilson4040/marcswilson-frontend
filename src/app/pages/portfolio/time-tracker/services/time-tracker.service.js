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
var http_1 = require("@angular/http");
var environment_1 = require("../../../../../environments/environment");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var TimeTrackerService = (function () {
    function TimeTrackerService(_http) {
        var _this = this;
        this._http = _http;
        this.companies$ = new BehaviorSubject_1.BehaviorSubject(null);
        this.activeCompany$ = new BehaviorSubject_1.BehaviorSubject(null);
        this.API_PATH = environment_1.environment.API_PATH + "/timetracker";
        this.getCompanies().then(function (companies) {
            _this.companies = companies;
        }, function (error) {
            _this.companies = error;
        });
    }
    Object.defineProperty(TimeTrackerService.prototype, "companies", {
        get: function () {
            return this.companies$.getValue();
        },
        set: function (value) {
            if (value !== null) {
                this.companies$.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeTrackerService.prototype, "activeCompany", {
        get: function () {
            return this.activeCompany$.getValue();
        },
        set: function (value) {
            if (value !== null) {
                this.activeCompany$.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    TimeTrackerService.prototype.getCompanies = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.get(_this.API_PATH + "/companies").subscribe(function (companies) {
                if (companies) {
                    var docs = JSON.parse(companies['_body']);
                    var ret = docs.map(function (d) { return new company_1.Company(d); });
                    resolve(ret);
                }
                else {
                    reject(companies);
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    TimeTrackerService.prototype.getProjectsByCompany = function (company) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.get(_this.API_PATH + "/projects/" + company._id).subscribe(function (result) {
                if (result) {
                    var parsed = JSON.parse(result['_body']);
                    var projects = parsed.map(function (p) {
                        return new company_1.Project(p);
                    });
                    _this.activeCompany.projects = projects;
                    resolve(projects);
                }
            });
        });
    };
    TimeTrackerService.prototype.addCompany = function (company) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (company !== null) {
                _this._http.post(_this.API_PATH + "/addcompany", { company: company }).subscribe(function (result) {
                    if (result) {
                        _this.getCompanies().then(function (companies) {
                            _this.companies = companies;
                            resolve(_this.companies);
                        });
                    }
                }, function (error) {
                    reject(error);
                });
            }
        });
    };
    TimeTrackerService.prototype.addProject = function (company, project) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (company && project) {
                _this._http.post(_this.API_PATH + "/company/addproject", { company: company, project: project }).subscribe(function (result) {
                    if (result) {
                        _this.getProjectsByCompany(company).then(function (projects) {
                            resolve(projects);
                        });
                    }
                }, function (error) {
                    reject(error);
                });
            }
            else {
                reject(new Error('No Company or Project passed in'));
            }
        });
    };
    TimeTrackerService.prototype.addEntry = function (entry) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post(_this.API_PATH + "/project/addentry", { entry: entry }).subscribe(function (result) {
                if (result) {
                    resolve();
                }
                else {
                    reject(result);
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