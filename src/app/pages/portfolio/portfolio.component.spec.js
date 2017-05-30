"use strict";
var testing_1 = require('@angular/core/testing');
var portfolio_component_1 = require('./portfolio.component');
describe('PortfolioComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [portfolio_component_1.PortfolioComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(portfolio_component_1.PortfolioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=portfolio.component.spec.js.map