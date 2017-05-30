"use strict";
var testing_1 = require('@angular/core/testing');
var beer_info_dialog_component_1 = require('./beer-info-dialog.component');
describe('BeerInfoDialogComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [beer_info_dialog_component_1.BeerInfoDialogComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(beer_info_dialog_component_1.BeerInfoDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=beer-info-dialog.component.spec.js.map