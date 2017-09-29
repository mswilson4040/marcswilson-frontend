import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDialogComponent } from './invoice-dialog.component';
import { MdDialogModule, MdDialogRef, MdExpansionModule, MdSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TimeTrackerService } from '../../services/time-tracker.service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from '../../../../../shared-services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

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
        MdDialogModule,
        MdExpansionModule,
        RouterTestingModule
      ],
      providers: [
        { provide: MdDialogRef, useClass: MdDialogRefMock },
        TimeTrackerService,
        AuthService
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
