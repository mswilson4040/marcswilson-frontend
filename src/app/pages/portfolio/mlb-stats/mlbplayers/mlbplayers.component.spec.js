"use strict";
var testing_1 = require('@angular/core/testing');
var mlbplayers_component_1 = require('./mlbplayers.component');
describe('MLBPlayersComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [mlbplayers_component_1.MLBPlayersComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(mlbplayers_component_1.MLBPlayersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mlbplayers.component.spec.js.map