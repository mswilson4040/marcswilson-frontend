import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackerInvoiceComponent } from './time-tracker-invoice.component';
import { MdDialogModule } from '@angular/material';
import { TimeTrackerService } from '../services/time-tracker.service';
import { HttpModule } from '@angular/http';
import { AuthService } from '../../../../shared-services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationResponse } from '../../../../shared-classes/authentication-response';

describe('TimeTrackerInvoiceComponent', () => {
  let component: TimeTrackerInvoiceComponent;
  let fixture: ComponentFixture<TimeTrackerInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTrackerInvoiceComponent ],
      imports: [
        MdDialogModule,
        HttpModule,
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
    fixture = TestBed.createComponent(TimeTrackerInvoiceComponent);
    component = fixture.componentInstance;
    component.authResponse = new AuthenticationResponse();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
