import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDialogComponent } from './company-dialog.component';
import {FormsModule} from '@angular/forms';
import {MdDialogRef, MdInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

class MdDialogRefMock {}

describe('CompanyDialogComponent', () => {
  let component: CompanyDialogComponent;
  let fixture: ComponentFixture<CompanyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MdInputModule,
        BrowserAnimationsModule
      ],
      declarations: [ CompanyDialogComponent ],
      providers: [
        {provide: MdDialogRef, useClass: MdDialogRefMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
