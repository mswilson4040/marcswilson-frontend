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
var time_tracker_service_1 = require("../services/time-tracker.service");
var ui_service_1 = require("../../../../shared-services/ui.service");
var material_1 = require("@angular/material");
var new_entry_dialog_component_1 = require("../dialogs/new-entry-dialog/new-entry-dialog.component");
var TimeTrackerTimesheetComponent = (function () {
    function TimeTrackerTimesheetComponent(_timeTrackerService, _uiService, _dialog) {
        this._timeTrackerService = _timeTrackerService;
        this._uiService = _uiService;
        this._dialog = _dialog;
        this.companies = new Array();
        this.activeCompany = new company_1.Company();
        this.selectedIndex = 0;
    }
    TimeTrackerTimesheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        // TODO: Bug(?): Tabs don't show left/right shifters on load
        this._timeTrackerService.companies$.subscribe(function (companies) {
            _this.companies = companies;
        }, function (error) {
            alert(error.message);
        });
        this._timeTrackerService.activeCompany$.subscribe(function (company) {
            if (company) {
                _this.activeCompany = company;
                var index = _this.companies.findIndex(function (c) { return c._id === _this.activeCompany._id; });
                _this.changeTab(index);
            }
        });
    };
    TimeTrackerTimesheetComponent.prototype.ngAfterViewInit = function () {
    };
    TimeTrackerTimesheetComponent.prototype.addEntry = function () {
        var _this = this;
        var dialogRef = this._dialog.open(new_entry_dialog_component_1.NewEntryDialogComponent, {
            height: '40%',
            width: '30%'
        });
        dialogRef.componentInstance.projects = this.activeCompany.projects;
        dialogRef.componentInstance.entry.companyId = this.activeCompany._id;
        dialogRef.afterClosed().subscribe(function (entry) {
            if (entry) {
                _this._timeTrackerService.addEntry(entry).then(function (entries) {
                    _this.activeCompany.entries = entries;
                }, function (error) {
                    alert(error.message);
                });
            }
        });
    };
    TimeTrackerTimesheetComponent.prototype.changeTab = function (index) {
        this.selectedIndex = index;
    };
    TimeTrackerTimesheetComponent.prototype.onTabChange = function (evt) {
        if (evt) {
            try {
                var company = this.companies[evt.index];
                this._timeTrackerService.activeCompany = company;
            }
            catch (ex) {
            }
        }
    };
    TimeTrackerTimesheetComponent = __decorate([
        core_1.Component({
            selector: 'app-time-tracker-timesheet',
            templateUrl: './time-tracker-timesheet.component.html',
            styleUrls: ['./time-tracker-timesheet.component.scss']
        }),
        __metadata("design:paramtypes", [time_tracker_service_1.TimeTrackerService, ui_service_1.UIService,
            material_1.MdDialog])
    ], TimeTrackerTimesheetComponent);
    return TimeTrackerTimesheetComponent;
}());
exports.TimeTrackerTimesheetComponent = TimeTrackerTimesheetComponent;
//# sourceMappingURL=time-tracker-timesheet.component.js.map