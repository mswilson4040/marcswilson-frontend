"use strict";
var testing_1 = require('@angular/core/testing');
var beer_tracker_component_1 = require('./beer-tracker.component');
var forms_1 = require('@angular/forms');
var beer_card_component_1 = require('./beer-card/beer-card.component');
var beer_info_dialog_component_1 = require('./beer-info-dialog/beer-info-dialog.component');
var ui_service_1 = require('../../../shared-services/ui.service');
var beer_tracker_service_1 = require('./services/beer-tracker.service');
var testing_2 = require('@angular/http/testing');
var http_1 = require('@angular/http');
describe('BeerTrackerComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule],
            declarations: [beer_tracker_component_1.BeerTrackerComponent, beer_card_component_1.BeerCardComponent, beer_info_dialog_component_1.BeerInfoDialogComponent],
            providers: [ui_service_1.UIService, beer_tracker_service_1.BeerTrackerService, { provide: http_1.Http, deps: [testing_2.MockBackend] }]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(beer_tracker_component_1.BeerTrackerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=beer-tracker.component.spec.js.map