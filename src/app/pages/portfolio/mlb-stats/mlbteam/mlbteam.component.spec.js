"use strict";
var testing_1 = require('@angular/core/testing');
var mlbteam_component_1 = require('./mlbteam.component');
describe('MLBTeamComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [mlbteam_component_1.MLBTeamComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(mlbteam_component_1.MLBTeamComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mlbteam.component.spec.js.map