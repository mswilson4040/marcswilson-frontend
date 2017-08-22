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
var company_1 = require("../../classes/company");
var material_1 = require("@angular/material");
var NewCompanyDialogComponent = (function () {
    function NewCompanyDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.company = new company_1.Company();
    }
    NewCompanyDialogComponent.prototype.ngOnInit = function () {
    };
    NewCompanyDialogComponent.prototype.closeDialog = function () {
        if (this.company.name !== null) {
            this._dialogRef.close(this.company);
        }
        else {
            this._dialogRef.close(null);
        }
    };
    NewCompanyDialogComponent.prototype.cancel = function () {
        this._dialogRef.close(null);
    };
    NewCompanyDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-new-company-dialog',
            templateUrl: './new-company-dialog.component.html',
            styleUrls: ['./new-company-dialog.component.scss']
        }),
        __metadata("design:paramtypes", [material_1.MdDialogRef])
    ], NewCompanyDialogComponent);
    return NewCompanyDialogComponent;
}());
exports.NewCompanyDialogComponent = NewCompanyDialogComponent;
//# sourceMappingURL=new-company-dialog.component.js.map