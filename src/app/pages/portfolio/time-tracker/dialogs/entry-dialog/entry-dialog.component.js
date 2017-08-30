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
var material_1 = require("@angular/material");
var company_1 = require("../../classes/company");
var time_tracker_service_1 = require("../../services/time-tracker.service");
var error_dialog_component_1 = require("../../../../../shared-components/error-dialog/error-dialog.component");
var EntryDialogComponent = (function () {
    function EntryDialogComponent(_dialogRef, _timeTrackerService, _dialog) {
        var _this = this;
        this._dialogRef = _dialogRef;
        this._timeTrackerService = _timeTrackerService;
        this._dialog = _dialog;
        this.companies = new Array();
        this.selectedCompany = new company_1.Company();
        this.projects = new Array();
        this.entry = new company_1.Entry();
        this._timeTrackerService.getCompanies().then(function (companies) {
            _this.companies = companies;
        }, function (error) {
            var edr = _this._dialog.open(error_dialog_component_1.ErrorDialogComponent);
            edr.componentInstance.error = error;
        });
    }
    EntryDialogComponent.prototype.ngOnInit = function () {
        this.entry.date = this.entry.date === null ? new Date() : this.entry.date;
    };
    EntryDialogComponent.prototype.onCompanyChange = function () {
        var _this = this;
        this._timeTrackerService.getProjectsByCompany(this.selectedCompany).then(function (projects) {
            _this.projects = projects;
        }, function (error) {
            var edr = _this._dialog.open(error_dialog_component_1.ErrorDialogComponent);
            edr.componentInstance.error = error;
        });
    };
    EntryDialogComponent.prototype.closeDialog = function () {
        this._dialogRef.close({ entry: this.entry, company: this.selectedCompany });
    };
    EntryDialogComponent.prototype.cancel = function () {
        this._dialogRef.close(null);
    };
    EntryDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-entry-dialog',
            templateUrl: './entry-dialog.component.html',
            styleUrls: ['./entry-dialog.component.scss'],
            providers: [time_tracker_service_1.TimeTrackerService]
        }),
        __metadata("design:paramtypes", [material_1.MdDialogRef, time_tracker_service_1.TimeTrackerService,
            material_1.MdDialog])
    ], EntryDialogComponent);
    return EntryDialogComponent;
}());
exports.EntryDialogComponent = EntryDialogComponent;
//# sourceMappingURL=entry-dialog.component.js.map