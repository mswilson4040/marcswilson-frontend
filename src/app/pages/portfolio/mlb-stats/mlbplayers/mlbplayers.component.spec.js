"use strict";
var testing_1 = require('@angular/core/testing');
var mlbplayers_component_1 = require('./mlbplayers.component');
var forms_1 = require('@angular/forms');
var mlb_stats_service_1 = require('../services/mlb-stats.service');
var http_1 = require('@angular/http');
var testing_2 = require('@angular/http/testing');
describe('MLBPlayersComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule],
            declarations: [mlbplayers_component_1.MLBPlayersComponent],
            providers: [mlb_stats_service_1.MlbStatsService, { provide: http_1.Http, deps: [testing_2.MockBackend] }]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(mlbplayers_component_1.MLBPlayersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mlbplayers.component.spec.js.map