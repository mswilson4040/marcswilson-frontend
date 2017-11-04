import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormDialogComponent } from './contact-form-dialog.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef, MatInputModule } from '@angular/material';

class MdDialogRefMock {}

describe('ContactFormDialogComponent', () => {
  let component: ContactFormDialogComponent;
  let fixture: ComponentFixture<ContactFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [ ContactFormDialogComponent ],
      providers: [
        { provide: MatDialogRef, useClass: MdDialogRefMock }
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
