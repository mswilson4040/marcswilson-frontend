"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var ui_service_1 = require("./ui.service");
describe('UIService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [ui_service_1.UIService]
        });
    });
    it('should be created', testing_1.inject([ui_service_1.UIService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=ui.service.spec.js.map