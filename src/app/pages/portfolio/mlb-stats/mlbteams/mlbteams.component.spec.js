"use strict";
var testing_1 = require('@angular/core/testing');
var mlbteams_component_1 = require('./mlbteams.component');
describe('MlbteamsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [mlbteams_component_1.MLBteamsComponent]
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