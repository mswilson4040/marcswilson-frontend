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
var time_tracker_service_1 = require("../services/time-tracker.service");
var company_1 = require("../classes/company");
var material_1 = require("@angular/material");
var entry_dialog_component_1 = require("../dialogs/entry-dialog/entry-dialog.component");
var error_dialog_component_1 = require("../../../../shared-components/error-dialog/error-dialog.component");
var TimeTrackerTimesheetComponent = (function () {
    function TimeTrackerTimesheetComponent(_timeTrackerService, _dialog) {
        this._timeTrackerService = _timeTrackerService;
        this._dialog = _dialog;
        this.companies = new Array();
        this.currentDate = new Date();
        this.selectedIndex = 0;
        this.selectedCompany = new company_1.Company();
    }
    TimeTrackerTimesheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._timeTrackerService.getCompanies().then(function (companies) {
            _this.companies = companies;
        }, function (error) {
            alert(error.message);
        });
    };
    TimeTrackerTimesheetComponent.prototype.ngAfterViewInit = function () {
    };
    TimeTrackerTimesheetComponent.prototype.addNewEntry = function () {
        var _this = this;
        var dialogRef = this._dialog.open(entry_dialog_component_1.EntryDialogComponent, { height: '60%', width: '30%' });
        dialogRef.componentInstance.selectedCompany = this.selectedCompany;
        dialogRef.afterClosed().subscribe(function (resultObj) {
            if (resultObj) {
                _this._timeTrackerService.addEntry(resultObj.company, resultObj.entry).then(function (entries) {
                    if (entries) {
                        _this.selectedCompany.entries = entries;
                    }
                });
            }
            else {
            }
        });
    };
    TimeTrackerTimesheetComponent.prototype.onCompanyChange = function () {
        var _this = this;
        this._timeTrackerService.getEntriesByCompany(this.selectedCompany).then(function (entries) {
            _this.selectedCompany.entries = entries;
        }, function (error) {
            var edr = _this._dialog.open(error_dialog_component_1.ErrorDialogComponent);
            edr.componentInstance.error = error;
        });
    };
    TimeTrackerTimesheetComponent.prototype.editEntry = function (entry) {
        var dialogRef = this._dialog.open(entry_dialog_component_1.EntryDialogComponent, { height: '60%', width: '30%' });
        dialogRef.componentInstance.entry = entry;
        dialogRef.componentInstance.selectedCompany = this.selectedCompany;
    };
    TimeTrackerTimesheetComponent = __decorate([
        core_1.Component({
            selector: 'app-time-tracker-timesheet',
            templateUrl: './time-tracker-timesheet.component.html',
            styleUrls: ['./time-tracker-timesheet.component.scss']
        }),
        __metadata("design:paramtypes", [time_tracker_service_1.TimeTrackerService, material_1.MdDialog])
    ], TimeTrackerTimesheetComponent);
    return TimeTrackerTimesheetComponent;
}());
exports.TimeTrackerTimesheetComponent = TimeTrackerTimesheetComponent;
//# sourceMappingURL=time-tracker-timesheet.component.js.map