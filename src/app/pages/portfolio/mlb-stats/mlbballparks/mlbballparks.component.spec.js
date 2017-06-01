"use strict";
var testing_1 = require('@angular/core/testing');
var mlbballparks_component_1 = require('./mlbballparks.component');
var mlb_stats_service_1 = require('../services/mlb-stats.service');
var testing_2 = require('@angular/http/testing');
var http_1 = require('@angular/http');
describe('MLBBallparksComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [mlbballparks_component_1.MLBBallparksComponent],
            providers: [mlb_stats_service_1.MlbStatsService, { provide: http_1.Http, deps: [testing_2.MockBackend] }]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(mlbballparks_component_1.MLBBallparksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mlbballparks.component.spec.js.map