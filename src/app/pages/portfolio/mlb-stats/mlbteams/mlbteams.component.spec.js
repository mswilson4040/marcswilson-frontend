"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var mlbteams_component_1 = require("./mlbteams.component");
var mlb_stats_service_1 = require("../services/mlb-stats.service");
var testing_2 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
describe('MlbteamsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [mlbteams_component_1.MLBteamsComponent],
            providers: [mlb_stats_service_1.MlbStatsService, { provide: http_1.Http, deps: [testing_2.MockBackend] }],
            imports: [material_1.MdSliderModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(mlbteams_component_1.MLBteamsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mlbteams.component.spec.js.map