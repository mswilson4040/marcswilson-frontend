"use strict";
var testing_1 = require('@angular/core/testing');
var overlay_component_1 = require('./overlay.component');
var ui_service_1 = require('../../shared-services/ui.service');
var testing_2 = require('@angular/http/testing');
var http_1 = require('@angular/http');
describe('OverlayComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [overlay_component_1.OverlayComponent],
            providers: [ui_service_1.UIService, { provide: http_1.Http, deps: [testing_2.MockBackend] }]
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