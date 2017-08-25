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
var CompanyDialogComponent = (function () {
    function CompanyDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.company = new company_1.Company();
    }
    CompanyDialogComponent.prototype.ngOnInit = function () {
    };
    CompanyDialogComponent.prototype.closeDialog = function (company) {
        this._dialogRef.close(company);
    };
    CompanyDialogComponent.prototype.addCompany = function () {
        this.closeDialog(this.company);
    };
    CompanyDialogComponent.prototype.cancel = function () {
        this.closeDialog(null);
    };
    CompanyDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-company-dialog',
            templateUrl: './company-dialog.component.html',
            styleUrls: ['./company-dialog.component.scss']
        }),
        __metadata("design:paramtypes", [material_1.MdDialogRef])
    ], CompanyDialogComponent);
    return CompanyDialogComponent;
}());
exports.CompanyDialogComponent = CompanyDialogComponent;
//# sourceMappingURL=company-dialog.component.js.map