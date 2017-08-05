import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormDialogComponent } from './contact-form-dialog.component';

describe('ContactFormDialogComponent', () => {
  let component: ContactFormDialogComponent;
  let fixture: ComponentFixture<ContactFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormDialogComponent ]
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
