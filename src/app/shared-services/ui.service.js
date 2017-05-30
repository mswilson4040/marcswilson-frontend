"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var UIService = (function () {
    function UIService() {
        this.dialogService$ = new BehaviorSubject_1.BehaviorSubject(null);
        this.overlayService$ = new BehaviorSubject_1.BehaviorSubject(null);
    }
    Object.defineProperty(UIService.prototype, "dialogService", {
        set: function (value) {
            this.dialogService$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIService.prototype, "overlayService", {
        set: function (value) {
            this.overlayService$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    UIService.prototype.showDialog = function (title, message, callback) {
        this.dialogService = { title: title, message: message, callback: callback };
    };
    UIService.prototype.showOverlay = function (message) {
        this.overlayService = { visible: true, message: message };
    };
    UIService.prototype.hideOverlay = function () {
        this.overlayService = { visible: false, message: '' };
    };
    UIService = __decorate([
        core_1.Injectable()
    ], UIService);
    return UIService;
}());
exports.UIService = UIService;
//# sourceMappingURL=ui.service.js.map