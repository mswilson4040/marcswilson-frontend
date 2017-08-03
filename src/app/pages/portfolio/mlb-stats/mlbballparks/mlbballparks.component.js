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
var ballpark_1 = require("../classes/ballpark");
var mlb_stats_service_1 = require("../services/mlb-stats.service");
var ui_service_1 = require("../../../../shared-services/ui.service");
var MLBBallparksComponent = (function () {
    function MLBBallparksComponent(_mlbstatsService, _uiService) {
        var _this = this;
        this._mlbstatsService = _mlbstatsService;
        this._uiService = _uiService;
        this.ballparks = new Array();
        this._uiService.showOverlay('Fetching ballparks...');
        this._mlbstatsService.getAllBallparks().then(function (parks) {
            _this.ballparks = parks.map(function (p) {
                return new ballpark_1.Ballpark(p);
            });
            _this._uiService.hideOverlay();
        });
    }
    MLBBallparksComponent.prototype.ngOnInit = function () {
        $('#mlbsstatsBallparksContainer').fadeIn();
    };
    MLBBallparksComponent.prototype.ngOnDestroy = function () {
    };
    MLBBallparksComponent = __decorate([
        core_1.Component({
            selector: 'app-mlbballparks',
            templateUrl: './mlbballparks.component.html',
            styleUrls: ['./mlbballparks.component.scss']
        }),
        __metadata("design:paramtypes", [mlb_stats_service_1.MlbStatsService, ui_service_1.UIService])
    ], MLBBallparksComponent);
    return MLBBallparksComponent;
}());
exports.MLBBallparksComponent = MLBBallparksComponent;
//# sourceMappingURL=mlbballparks.component.js.map