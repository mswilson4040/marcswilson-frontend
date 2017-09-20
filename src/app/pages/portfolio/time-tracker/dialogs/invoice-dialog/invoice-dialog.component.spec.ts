import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDialogComponent } from './invoice-dialog.component';
import { MdDialogModule, MdDialogRef, MdSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TimeTrackerService } from '../../services/time-tracker.service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MdDialogRefMock {}

describe('InvoiceDialogComponent', () => {
  let component: InvoiceDialogComponent;
  let fixture: ComponentFixture<InvoiceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceDialogComponent ],
      imports: [
        MdSelectModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MdDialogModule
      ],
      providers: [
        { provide: MdDialogRef, useClass: MdDialogRefMock },
        TimeTrackerService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
