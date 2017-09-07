import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryDialogComponent } from './entry-dialog.component';
import {FormsModule} from '@angular/forms';
import {MdDatepickerModule, MdDialogRef, MdNativeDateModule, MdOptionModule, MdSelectModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Company, Project} from '../../classes/company';

class MdDialogRefMock {}

describe('EntryDialogComponent', () => {
  let component: EntryDialogComponent;
  let fixture: ComponentFixture<EntryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MdOptionModule,
        MdSelectModule,
        MdDatepickerModule,
        HttpModule,
        MdNativeDateModule,
        BrowserAnimationsModule
      ],
      declarations: [ EntryDialogComponent ],
      providers: [
        { provide: MdDialogRef, useClass: MdDialogRefMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryDialogComponent);
    component = fixture.componentInstance;
    component.selectedCompany = new Company();
    component.selectedProject = new Project();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
