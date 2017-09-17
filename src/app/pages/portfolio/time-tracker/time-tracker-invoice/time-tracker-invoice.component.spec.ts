import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackerInvoiceComponent } from './time-tracker-invoice.component';

describe('TimeTrackerInvoiceComponent', () => {
  let component: TimeTrackerInvoiceComponent;
  let fixture: ComponentFixture<TimeTrackerInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTrackerInvoiceComponent ]
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
