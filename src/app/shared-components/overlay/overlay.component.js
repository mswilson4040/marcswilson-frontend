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
var ui_service_1 = require("../../shared-services/ui.service");
var OverlayComponent = (function () {
    function OverlayComponent(_uiService) {
        var _this = this;
        this._uiService = _uiService;
        this.message = null;
        this.visible = null;
        this._uiService.overlayService$.subscribe(function (overlaySettings) {
            if (overlaySettings !== null) {
                if (overlaySettings.visible === true) {
                    _this.showOverlay(overlaySettings.message);
                }
                else if (overlaySettings.visible === false) {
                    _this.hideOverlay();
                }
            }
        });
    }
    OverlayComponent.prototype.ngOnInit = function () {
    };
    OverlayComponent.prototype.showOverlay = function (message) {
        this.message = message;
        this.visible = true;
        $('#overlayContainer').fadeIn();
    };
    OverlayComponent.prototype.hideOverlay = function () {
        this.message = null;
        this.visible = false;
        $('#overlayContainer').fadeOut();
    };
    OverlayComponent = __decorate([
        core_1.Component({
            selector: 'app-overlay',
            templateUrl: './overlay.component.html',
            styleUrls: ['./overlay.component.scss']
        }),
        __metadata("design:paramtypes", [ui_service_1.UIService])
    ], OverlayComponent);
    return OverlayComponent;
}());
exports.OverlayComponent = OverlayComponent;
//# sourceMappingURL=overlay.component.js.map