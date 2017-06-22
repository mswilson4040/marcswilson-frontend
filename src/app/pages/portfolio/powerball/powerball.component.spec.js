"use strict";
var testing_1 = require('@angular/core/testing');
var powerball_component_1 = require('./powerball.component');
describe('PowerballComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [powerball_component_1.PowerballComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(powerball_component_1.PowerballComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=powerball.component.spec.js.map