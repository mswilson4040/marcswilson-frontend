import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackerTimesheetComponent } from './time-tracker-timesheet.component';

describe('TimeTrackerTimesheetComponent', () => {
  let component: TimeTrackerTimesheetComponent;
  let fixture: ComponentFixture<TimeTrackerTimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTrackerTimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTrackerTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
