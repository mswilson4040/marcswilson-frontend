import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseSelectorDialogComponent } from './database-selector-dialog.component';
import { MatDialogModule, MatDialogRef, MatIconModule, MatListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { UIService } from '../../../../shared-services/ui.service';

class MatDialogRefMock { updateSize() {} updatePosition() {}}

describe('DatabaseSelectorDialogComponent', () => {
  let component: DatabaseSelectorDialogComponent;
  let fixture: ComponentFixture<DatabaseSelectorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DatabaseSelectorDialogComponent
      ],
      imports: [
        MatIconModule,
        MatListModule,
        MatDialogModule,
        HttpClientModule
      ],
      providers: [
        UIService,
        { provide: MatDialogRef, useClass: MatDialogRefMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseSelectorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
