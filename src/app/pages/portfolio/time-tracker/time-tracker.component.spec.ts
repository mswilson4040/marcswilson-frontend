import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackerComponent } from './time-tracker.component';
import {
  MdChipsModule,
  MdDialogModule, MdOptionModule, MdSelectModule, MdSidenavModule,
  MdTabsModule
} from '@angular/material';
import { TimeTrackerTimesheetComponent } from './time-tracker-timesheet/time-tracker-timesheet.component';
import { FormsModule } from '@angular/forms';
import { TimeTrackerService } from './services/time-tracker.service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimeTrackerCalendarComponent } from './time-tracker-calendar/time-tracker-calendar.component';
import { TimeTrackerInvoiceComponent } from './time-tracker-invoice/time-tracker-invoice.component';
import { AuthService } from '../../../shared-services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationResponse } from '../../../shared-classes/authentication-response';

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
        BrowserAnimationsModule,
        MdChipsModule,
        RouterTestingModule
      ],
      declarations: [
        TimeTrackerComponent,
        TimeTrackerTimesheetComponent,
        TimeTrackerCalendarComponent,
        TimeTrackerInvoiceComponent
      ],
      providers: [
        TimeTrackerService,
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTrackerComponent);
    component = fixture.componentInstance;
    component.authResponse = new AuthenticationResponse();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
