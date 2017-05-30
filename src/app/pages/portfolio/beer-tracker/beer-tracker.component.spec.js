"use strict";
var testing_1 = require('@angular/core/testing');
var beer_tracker_component_1 = require('./beer-tracker.component');
describe('BeerTrackerComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [beer_tracker_component_1.BeerTrackerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(beer_tracker_component_1.BeerTrackerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=beer-tracker.component.spec.js.map