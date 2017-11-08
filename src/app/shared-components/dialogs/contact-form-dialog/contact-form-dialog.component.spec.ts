import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormDialogComponent } from './contact-form-dialog.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef, MatInputModule } from '@angular/material';
import { EmailService } from '../../../shared-services/email.service';
import { HttpModule } from '@angular/http';
import { UIService } from '../../../shared-services/ui.service';

class MdDialogRefMock {}

describe('ContactFormDialogComponent', () => {
  let component: ContactFormDialogComponent;
  let fixture: ComponentFixture<ContactFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatDialogModule
      ],
      declarations: [ ContactFormDialogComponent ],
      providers: [
        { provide: MatDialogRef, useClass: MdDialogRefMock },
        EmailService,
        UIService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
