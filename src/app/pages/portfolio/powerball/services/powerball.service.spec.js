"use strict";
var testing_1 = require('@angular/core/testing');
var powerball_service_1 = require('./powerball.service');
describe('PowerballService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [powerball_service_1.PowerballService]
        });
    });
    it('should be created', testing_1.inject([powerball_service_1.PowerballService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=powerball.service.spec.js.map