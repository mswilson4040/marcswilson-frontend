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
var company_1 = require("./classes/company");
var time_tracker_service_1 = require("./services/time-tracker.service");
var material_1 = require("@angular/material");
var company_dialog_component_1 = require("./dialogs/company-dialog/company-dialog.component");
var project_dialog_component_1 = require("./dialogs/project-dialog/project-dialog.component");
var error_dialog_component_1 = require("../../../shared-components/error-dialog/error-dialog.component");
var TimeTrackerComponent = (function () {
    function TimeTrackerComponent(_timeTrackerService, _dialog) {
        this._timeTrackerService = _timeTrackerService;
        this._dialog = _dialog;
        this.companies = new Array();
        this.selectedTab = 0;
        this.selectedCompany = new company_1.Company();
    }
    TimeTrackerComponent.prototype.ngOnInit = function () {
    };
    TimeTrackerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._timeTrackerService.getCompanies().then(function (companies) {
            _this.companies = companies;
        }, function (error) {
            var edr = _this._dialog.open(error_dialog_component_1.ErrorDialogComponent);
            edr.componentInstance.error = error;
        });
    };
    TimeTrackerComponent.prototype.changeTab = function (index) {
        this.selectedTab = index;
    };
    TimeTrackerComponent.prototype.addCompany = function () {
        var _this = this;
        var dialogRef = this._dialog.open(company_dialog_component_1.CompanyDialogComponent);
        dialogRef.afterClosed().subscribe(function (company) {
            if (company) {
                _this._timeTrackerService.addCompany(company).then(function (companies) {
                    _this.companies = companies;
                }, function (error) {
                    var edr = _this._dialog.open(error_dialog_component_1.ErrorDialogComponent);
                    edr.componentInstance.error = error;
                });
            }
        });
    };
    TimeTrackerComponent.prototype.addProject = function () {
        var _this = this;
        var dialogRef = this._dialog.open(project_dialog_component_1.ProjectDialogComponent);
        dialogRef.afterClosed().subscribe(function (project) {
            if (project) {
                _this._timeTrackerService.addProject(_this.selectedCompany, project).then(function (projects) {
                    var company = _this.companies.find(function (c) { return c._id === _this.selectedCompany._id; });
                    company.projects = projects;
                }, function (error) {
                    var edr = _this._dialog.open(error_dialog_component_1.ErrorDialogComponent);
                    edr.componentInstance.error = error;
                });
            }
        });
    };
    TimeTrackerComponent.prototype.toggleCollapse = function (company) {
        var _this = this;
        if (this.selectedCompany._id === company._id) {
            this.selectedCompany = new company_1.Company();
        }
        else {
            this._timeTrackerService.getProjectsByCompany(company).then(function (projects) {
                company.projects = projects;
                _this.selectedCompany = company;
            }, function (error) {
                var edr = _this._dialog.open(error_dialog_component_1.ErrorDialogComponent);
                edr.componentInstance.error = error;
            });
        }
    };
    TimeTrackerComponent = __decorate([
        core_1.Component({
            selector: 'app-time-tracker',
            templateUrl: './time-tracker.component.html',
            styleUrls: ['./time-tracker.component.scss']
        }),
        __metadata("design:paramtypes", [time_tracker_service_1.TimeTrackerService, material_1.MdDialog])
    ], TimeTrackerComponent);
    return TimeTrackerComponent;
}());
exports.TimeTrackerComponent = TimeTrackerComponent;
//# sourceMappingURL=time-tracker.component.js.map