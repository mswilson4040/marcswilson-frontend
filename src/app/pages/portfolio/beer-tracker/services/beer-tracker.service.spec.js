"use strict";
var testing_1 = require('@angular/core/testing');
var beer_tracker_service_1 = require('./beer-tracker.service');
var testing_2 = require('@angular/http/testing');
var http_1 = require('@angular/http');
describe('BeerTrackerService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [beer_tracker_service_1.BeerTrackerService, { provide: http_1.Http, deps: [testing_2.MockBackend] }]
        });
    });
    it('should be created', testing_1.inject([beer_tracker_service_1.BeerTrackerService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=beer-tracker.service.spec.js.map