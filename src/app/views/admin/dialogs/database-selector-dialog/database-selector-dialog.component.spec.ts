import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseSelectorDialogComponent } from './database-selector-dialog.component';

describe('DatabaseSelectorDialogComponent', () => {
  let component: DatabaseSelectorDialogComponent;
  let fixture: ComponentFixture<DatabaseSelectorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseSelectorDialogComponent ]
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
