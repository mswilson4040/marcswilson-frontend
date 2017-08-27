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
var ErrorDialogComponent = (function () {
    function ErrorDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.error = new Error();
    }
    ErrorDialogComponent.prototype.ngOnInit = function () {
    };
    ErrorDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-error-dialog',
            templateUrl: './error-dialog.component.html',
            styleUrls: ['./error-dialog.component.scss']
        }),
        __metadata("design:paramtypes", [material_1.MdDialogRef])
    ], ErrorDialogComponent);
    return ErrorDialogComponent;
}());
exports.ErrorDialogComponent = ErrorDialogComponent;
//# sourceMappingURL=error-dialog.component.js.map