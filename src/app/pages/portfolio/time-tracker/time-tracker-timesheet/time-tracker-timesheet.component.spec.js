"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var time_tracker_timesheet_component_1 = require("./time-tracker-timesheet.component");
describe('TimeTrackerTimesheetComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [time_tracker_timesheet_component_1.TimeTrackerTimesheetComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(time_tracker_timesheet_component_1.TimeTrackerTimesheetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=time-tracker-timesheet.component.spec.js.map