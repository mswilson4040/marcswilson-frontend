"use strict";
var testing_1 = require('@angular/core/testing');
var beer_tracker_service_1 = require('./beer-tracker.service');
describe('BeerTrackerService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [beer_tracker_service_1.BeerTrackerService]
        });
    });
    it('should be created', testing_1.inject([beer_tracker_service_1.BeerTrackerService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=beer-tracker.service.spec.js.map