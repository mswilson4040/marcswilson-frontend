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
var NewEntryDialogComponent = (function () {
    function NewEntryDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.entry = new company_1.Entry();
        this.projects = new Array();
    }
    NewEntryDialogComponent.prototype.ngOnInit = function () {
    };
    NewEntryDialogComponent.prototype.closeDialog = function () {
        this._dialogRef.close(this.entry);
    };
    NewEntryDialogComponent.prototype.cancel = function () {
        this._dialogRef.close(null);
    };
    NewEntryDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-new-entry-dialog',
            templateUrl: './new-entry-dialog.component.html',
            styleUrls: ['./new-entry-dialog.component.scss']
        }),
        __metadata("design:paramtypes", [material_1.MdDialogRef])
    ], NewEntryDialogComponent);
    return NewEntryDialogComponent;
}());
exports.NewEntryDialogComponent = NewEntryDialogComponent;
//# sourceMappingURL=new-entry-dialog.component.js.map