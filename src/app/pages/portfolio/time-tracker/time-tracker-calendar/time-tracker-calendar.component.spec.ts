import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackerCalendarComponent } from './time-tracker-calendar.component';

describe('TimeTrackerCalendarComponent', () => {
  let component: TimeTrackerCalendarComponent;
  let fixture: ComponentFixture<TimeTrackerCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTrackerCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTrackerCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
