import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDialogComponent } from './project-dialog.component';
import { FormsModule } from '@angular/forms';
import {MdDialogRef, MdInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MdDialogRefMock {}

describe('ProjectDialogComponent', () => {
  let component: ProjectDialogComponent;
  let fixture: ComponentFixture<ProjectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MdInputModule,
        BrowserAnimationsModule
      ],
      declarations: [ ProjectDialogComponent ],
      providers: [
        { provide: MdDialogRef, useClass: MdDialogRefMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
