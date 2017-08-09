"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var time_tracker_service_1 = require("./time-tracker.service");
describe('TimeTrackerService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [time_tracker_service_1.TimeTrackerService]
        });
    });
    it('should be created', testing_1.inject([time_tracker_service_1.TimeTrackerService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=time-tracker.service.spec.js.map