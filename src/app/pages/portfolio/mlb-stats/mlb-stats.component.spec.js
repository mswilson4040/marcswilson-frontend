"use strict";
var testing_1 = require('@angular/core/testing');
var mlb_stats_component_1 = require('./mlb-stats.component');
describe('MlbStatsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [mlb_stats_component_1.MlbStatsComponent]
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