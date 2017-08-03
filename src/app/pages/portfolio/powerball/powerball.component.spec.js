"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var powerball_component_1 = require("./powerball.component");
var powerball_service_1 = require("./services/powerball.service");
var testing_2 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var ui_service_1 = require("../../../shared-services/ui.service");
describe('PowerballComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [powerball_component_1.PowerballComponent],
            providers: [powerball_service_1.PowerballService, { provide: http_1.Http, deps: [testing_2.MockBackend] }, ui_service_1.UIService]
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