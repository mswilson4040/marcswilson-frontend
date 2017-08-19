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
var time_tracker_service_1 = require("./services/time-tracker.service");
var material_1 = require("@angular/material");
var new_company_dialog_component_1 = require("./dialogs/new-company-dialog/new-company-dialog.component");
var new_project_dialog_component_1 = require("./dialogs/new-project-dialog/new-project-dialog.component");
var TimeTrackerComponent = (function () {
    function TimeTrackerComponent(_timeTrackerService, _dialog) {
        this._timeTrackerService = _timeTrackerService;
        this._dialog = _dialog;
        this.companies = new Array();
        this.selectedTab = 0;
        this.activeCompany = null;
    }
    TimeTrackerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._timeTrackerService.companies$.subscribe(function (companies) {
            if (companies) {
                _this.companies = companies;
            }
        }, function (error) {
            alert(error.message);
        });
        this._timeTrackerService.activeCompany$.subscribe(function (company) {
            if (company !== null) {
                _this.activeCompany = company;
            }
        }, function (error) {
            alert(error.message);
        });
    };
    TimeTrackerComponent.prototype.ngAfterViewInit = function () {
    };
    TimeTrackerComponent.prototype.addCompany = function () {
        var _this = this;
        var dialogRef = this._dialog.open(new_company_dialog_component_1.NewCompanyDialogComponent);
        dialogRef.afterClosed().subscribe(function (company) {
            _this._timeTrackerService.addCompany(company).then(function (result) {
                if (!result) {
                    alert('cant add company');
                }
            }, function (error) {
                alert(error.message);
            });
        });
    };
    TimeTrackerComponent.prototype.addProject = function (company) {
        var _this = this;
        var dialogRef = this._dialog.open(new_project_dialog_component_1.NewProjectDialogComponent);
        dialogRef.afterClosed().subscribe(function (project) {
            _this._timeTrackerService.addProject(company, project).then(function (projects) {
                _this.activeCompany.projects = projects;
                _this._timeTrackerService.activeCompany = _this.activeCompany;
            }, function (error) {
                alert(error.message);
            });
        });
    };
    TimeTrackerComponent.prototype.changeTab = function (index) {
        this.selectedTab = index;
    };
    TimeTrackerComponent.prototype.expandProjects = function (company) {
        var _this = this;
        this._timeTrackerService.getProjectsByCompany(company).then(function (projects) {
            company.projects = projects;
            _this._timeTrackerService.activeCompany = company;
        });
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