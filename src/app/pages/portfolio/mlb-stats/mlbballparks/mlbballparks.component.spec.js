"use strict";
var testing_1 = require('@angular/core/testing');
var mlbballparks_component_1 = require('./mlbballparks.component');
describe('MLBBallparksComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [mlbballparks_component_1.MLBBallparksComponent]
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