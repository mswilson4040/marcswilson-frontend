import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormDialogComponent } from './contact-form-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef, MatInputModule } from '@angular/material';
import { EmailService } from '../../../shared-services/email.service';
import { UIService } from '../../../shared-services/ui.service';
import { HttpClientModule } from '@angular/common/http';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';

class MdDialogRefMock {
  updateSize() {}
  updatePosition() {}
}

describe('ContactFormDialogComponent', () => {
  let component: ContactFormDialogComponent;
  let fixture: ComponentFixture<ContactFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatDialogModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [ ContactFormDialogComponent ],
      providers: [
        { provide: MatDialogRef, useClass: MdDialogRefMock },
        EmailService,
        UIService,
        BreakpointObserver,
        MediaMatcher
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
