"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var mlb_api_explorer_component_1 = require("./mlb-api-explorer.component");
var forms_1 = require("@angular/forms");
var testing_2 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var ui_service_1 = require("../../../shared-services/ui.service");
var mlb_stats_service_1 = require("../mlb-stats/services/mlb-stats.service");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
describe('MlbApiExplorerComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                forms_1.FormsModule,
                material_1.MdSliderModule,
                material_1.MdAutocompleteModule,
                forms_1.ReactiveFormsModule,
                material_1.MdInputModule,
                material_1.MdDatepickerModule,
                material_1.MdNativeDateModule,
                animations_1.BrowserAnimationsModule
            ],
            declarations: [mlb_api_explorer_component_1.MlbApiExplorerComponent],
            providers: [ui_service_1.UIService, mlb_stats_service_1.MlbStatsService, { provide: http_1.Http, deps: [testing_2.MockBackend] }]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(mlb_api_explorer_component_1.MlbApiExplorerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mlb-api-explorer.component.spec.js.map