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
var ProjectDialogComponent = (function () {
    function ProjectDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.project = new company_1.Project();
    }
    ProjectDialogComponent.prototype.ngOnInit = function () {
    };
    ProjectDialogComponent.prototype.dialogClose = function () {
        this._dialogRef.close(this.project);
    };
    ProjectDialogComponent.prototype.cancel = function () {
        this._dialogRef.close(null);
    };
    ProjectDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-project-dialog',
            templateUrl: './project-dialog.component.html',
            styleUrls: ['./project-dialog.component.scss']
        }),
        __metadata("design:paramtypes", [material_1.MdDialogRef])
    ], ProjectDialogComponent);
    return ProjectDialogComponent;
}());
exports.ProjectDialogComponent = ProjectDialogComponent;
//# sourceMappingURL=project-dialog.component.js.map