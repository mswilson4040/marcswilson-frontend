"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var email_service_1 = require("./email.service");
describe('EmailService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [email_service_1.EmailService]
        });
    });
    it('should be created', testing_1.inject([email_service_1.EmailService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=email.service.spec.js.map