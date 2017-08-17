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
var NewProjectDialogComponent = (function () {
    function NewProjectDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.project = new company_1.Project();
    }
    NewProjectDialogComponent.prototype.ngOnInit = function () {
    };
    NewProjectDialogComponent.prototype.close = function () {
        this._dialogRef.close(this.project);
    };
    NewProjectDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-new-project-dialog',
            templateUrl: './new-project-dialog.component.html',
            styleUrls: ['./new-project-dialog.component.scss']
        }),
        __metadata("design:paramtypes", [material_1.MdDialogRef])
    ], NewProjectDialogComponent);
    return NewProjectDialogComponent;
}());
exports.NewProjectDialogComponent = NewProjectDialogComponent;
//# sourceMappingURL=new-project-dialog.component.js.map