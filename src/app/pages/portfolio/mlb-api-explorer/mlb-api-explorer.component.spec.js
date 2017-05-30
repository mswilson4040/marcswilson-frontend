"use strict";
var testing_1 = require('@angular/core/testing');
var mlb_api_explorer_component_1 = require('./mlb-api-explorer.component');
describe('MlbApiExplorerComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [mlb_api_explorer_component_1.MlbApiExplorerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(mlb_api_explorer_component_1.MlbApiExplorerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mlb-api-explorer.component.spec.js.map