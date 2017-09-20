import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackerTimesheetComponent } from './time-tracker-timesheet.component';
import { FormsModule } from '@angular/forms';
import { MdDialogModule, MdOptionModule, MdSelectModule, MdTabsModule } from '@angular/material';
import { TimeTrackerService } from '../services/time-tracker.service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from '../../../../shared-services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('TimeTrackerTimesheetComponent', () => {
  let component: TimeTrackerTimesheetComponent;
  let fixture: ComponentFixture<TimeTrackerTimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MdOptionModule,
        MdSelectModule,
        MdTabsModule,
        HttpModule,
        MdDialogModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      declarations: [ TimeTrackerTimesheetComponent ],
      providers: [
        TimeTrackerService,
        AuthService
      ]
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
