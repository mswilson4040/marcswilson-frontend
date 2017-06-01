"use strict";
var testing_1 = require('@angular/core/testing');
var beer_info_dialog_component_1 = require('./beer-info-dialog.component');
var beer_tracker_service_1 = require('../services/beer-tracker.service');
var http_1 = require('@angular/http');
var ui_service_1 = require('../../../../shared-services/ui.service');
describe('BeerInfoDialogComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule],
            declarations: [beer_info_dialog_component_1.BeerInfoDialogComponent],
            providers: [beer_tracker_service_1.BeerTrackerService, ui_service_1.UIService]
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