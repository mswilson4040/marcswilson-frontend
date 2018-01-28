import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDatabaseDialogComponent } from './new-database-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MatDialogRefMock { updateSize() {} updatePosition() {}}

describe('NewDatabaseDialogComponent', () => {
  let component: NewDatabaseDialogComponent;
  let fixture: ComponentFixture<NewDatabaseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewDatabaseDialogComponent
      ],
      imports: [
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useClass: MatDialogRefMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDatabaseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
