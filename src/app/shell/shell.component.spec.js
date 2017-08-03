"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var shell_component_1 = require("./shell.component");
var global_nav_component_1 = require("../shared-components/global-nav/global-nav.component");
var testing_2 = require("@angular/router/testing");
var overlay_component_1 = require("../shared-components/overlay/overlay.component");
describe('ShellComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.RouterTestingModule],
            declarations: [shell_component_1.ShellComponent, global_nav_component_1.GlobalNavComponent, overlay_component_1.OverlayComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(shell_component_1.ShellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=shell.component.spec.js.map