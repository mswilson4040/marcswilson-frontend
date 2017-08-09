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
var time_tracker_service_1 = require("./services/time-tracker.service");
var TimeTrackerComponent = (function () {
    function TimeTrackerComponent(_timeTrackerService) {
        this._timeTrackerService = _timeTrackerService;
        this.companies = new Array();
    }
    TimeTrackerComponent.prototype.ngOnInit = function () {
    };
    TimeTrackerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._timeTrackerService.getCompanies().then(function (companies) {
            _this.companies = companies;
        }, function (error) {
            alert(error.message);
        });
    };
    TimeTrackerComponent = __decorate([
        core_1.Component({
            selector: 'app-time-tracker',
            templateUrl: './time-tracker.component.html',
            styleUrls: ['./time-tracker.component.scss']
        }),
        __metadata("design:paramtypes", [time_tracker_service_1.TimeTrackerService])
    ], TimeTrackerComponent);
    return TimeTrackerComponent;
}());
exports.TimeTrackerComponent = TimeTrackerComponent;
//# sourceMappingURL=time-tracker.component.js.map