import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackerCalendarComponent } from './time-tracker-calendar.component';
import { MdChipsModule, MdDialogModule } from '@angular/material';
import { TimeTrackerService } from '../services/time-tracker.service';
import { HttpModule } from '@angular/http';
import { AuthService } from '../../../../shared-services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationResponse } from '../../../../shared-classes/authentication-response';

describe('TimeTrackerCalendarComponent', () => {
  let component: TimeTrackerCalendarComponent;
  let fixture: ComponentFixture<TimeTrackerCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTrackerCalendarComponent ],
      imports: [
        MdChipsModule,
        HttpModule,
        MdDialogModule,
        RouterTestingModule
      ],
      providers: [
        TimeTrackerService,
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTrackerCalendarComponent);
    component = fixture.componentInstance;
    component.authResponse = new AuthenticationResponse();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
