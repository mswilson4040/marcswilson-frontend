"use strict";
var testing_1 = require('@angular/core/testing');
var mlb_stats_service_1 = require('./mlb-stats.service');
var http_1 = require('@angular/http');
var testing_2 = require('@angular/http/testing');
describe('MlbStatsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [mlb_stats_service_1.MlbStatsService, { provide: http_1.Http, deps: [testing_2.MockBackend] }]
        });
    });
    it('should be created', testing_1.inject([mlb_stats_service_1.MlbStatsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=mlb-stats.service.spec.js.map