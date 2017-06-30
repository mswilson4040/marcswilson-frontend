"use strict";
var testing_1 = require('@angular/core/testing');
var player_comparer_component_1 = require('./player-comparer.component');
describe('PlayerComparerComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [player_comparer_component_1.PlayerComparerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(player_comparer_component_1.PlayerComparerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=player-comparer.component.spec.js.map