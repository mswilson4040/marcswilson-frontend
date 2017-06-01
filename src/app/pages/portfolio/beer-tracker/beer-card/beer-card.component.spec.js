"use strict";
var testing_1 = require('@angular/core/testing');
var beer_card_component_1 = require('./beer-card.component');
var beer_tracker_service_1 = require('../services/beer-tracker.service');
var http_1 = require('@angular/http');
var ui_service_1 = require('../../../../shared-services/ui.service');
describe('BeerCardComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule],
            declarations: [beer_card_component_1.BeerCardComponent],
            providers: [beer_tracker_service_1.BeerTrackerService, ui_service_1.UIService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(beer_card_component_1.BeerCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=beer-card.component.spec.js.map