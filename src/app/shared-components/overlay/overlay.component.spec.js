"use strict";
var testing_1 = require('@angular/core/testing');
var overlay_component_1 = require('./overlay.component');
describe('OverlayComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [overlay_component_1.OverlayComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(overlay_component_1.OverlayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=overlay.component.spec.js.map