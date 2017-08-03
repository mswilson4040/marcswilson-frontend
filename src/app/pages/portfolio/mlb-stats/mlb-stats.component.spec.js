"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var mlb_stats_component_1 = require("./mlb-stats.component");
var mlb_stats_service_1 = require("./services/mlb-stats.service");
var testing_2 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var ui_service_1 = require("../../../shared-services/ui.service");
describe('MlbStatsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [mlb_stats_component_1.MlbStatsComponent],
            providers: [mlb_stats_service_1.MlbStatsService, { provide: http_1.Http, deps: [testing_2.MockBackend] }, ui_service_1.UIService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(mlb_stats_component_1.MlbStatsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mlb-stats.component.spec.js.map