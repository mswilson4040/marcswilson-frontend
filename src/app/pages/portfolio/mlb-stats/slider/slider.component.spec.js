"use strict";
var testing_1 = require('@angular/core/testing');
var slider_component_1 = require('./slider.component');
var mlb_stats_service_1 = require('../services/mlb-stats.service');
var http_1 = require('@angular/http');
var testing_2 = require('@angular/http/testing');
describe('SliderComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [slider_component_1.SliderComponent],
            providers: [mlb_stats_service_1.MlbStatsService, { provide: http_1.Http, deps: [testing_2.MockBackend] }]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(slider_component_1.SliderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=slider.component.spec.js.map