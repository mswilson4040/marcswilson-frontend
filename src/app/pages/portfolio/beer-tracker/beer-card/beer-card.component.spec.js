"use strict";
var testing_1 = require('@angular/core/testing');
var beer_card_component_1 = require('./beer-card.component');
describe('BeerCardComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [beer_card_component_1.BeerCardComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(beer_card_component_1.BeerCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=beer-card.component.spec.js.map