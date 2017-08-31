import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackerComponent } from './time-tracker.component';
import {
  MdDialogModule, MdOptionModule, MdSelectModule, MdSidenavModule,
  MdTabsModule
} from '@angular/material';
import { TimeTrackerTimesheetComponent } from './time-tracker-timesheet/time-tracker-timesheet.component';
import { FormsModule } from '@angular/forms';
import { TimeTrackerService } from './services/time-tracker.service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TimeTrackerComponent', () => {
  let component: TimeTrackerComponent;
  let fixture: ComponentFixture<TimeTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdSidenavModule,
        MdTabsModule,
        FormsModule,
        MdOptionModule,
        MdSelectModule,
        HttpModule,
        MdDialogModule,
        BrowserAnimationsModule
      ],
      declarations: [ TimeTrackerComponent, TimeTrackerTimesheetComponent ],
      providers: [TimeTrackerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
