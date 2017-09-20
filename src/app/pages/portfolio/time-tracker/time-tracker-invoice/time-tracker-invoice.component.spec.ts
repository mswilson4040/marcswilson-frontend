import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackerInvoiceComponent } from './time-tracker-invoice.component';
import { MdDialogModule } from '@angular/material';

describe('TimeTrackerInvoiceComponent', () => {
  let component: TimeTrackerInvoiceComponent;
  let fixture: ComponentFixture<TimeTrackerInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTrackerInvoiceComponent ],
      imports: [
        MdDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTrackerInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
