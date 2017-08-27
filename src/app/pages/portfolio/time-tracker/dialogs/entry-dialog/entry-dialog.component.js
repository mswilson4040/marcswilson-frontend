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
var EntryDialogComponent = (function () {
    function EntryDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
    }
    EntryDialogComponent.prototype.ngOnInit = function () {
    };
    EntryDialogComponent.prototype.closeDialog = function () {
        this._dialogRef.close();
    };
    EntryDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-entry-dialog',
            templateUrl: './entry-dialog.component.html',
            styleUrls: ['./entry-dialog.component.scss']
        }),
        __metadata("design:paramtypes", [material_1.MdDialogRef])
    ], EntryDialogComponent);
    return EntryDialogComponent;
}());
exports.EntryDialogComponent = EntryDialogComponent;
//# sourceMappingURL=entry-dialog.component.js.map