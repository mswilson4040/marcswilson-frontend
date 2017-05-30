"use strict";
var testing_1 = require('@angular/core/testing');
var mlb_stats_service_1 = require('./mlb-stats.service');
describe('MlbStatsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [mlb_stats_service_1.MlbStatsService]
        });
    });
    it('should be created', testing_1.inject([mlb_stats_service_1.MlbStatsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=mlb-stats.service.spec.js.map