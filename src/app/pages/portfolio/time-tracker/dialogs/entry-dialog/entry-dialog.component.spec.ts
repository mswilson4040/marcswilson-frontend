import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryDialogComponent } from './entry-dialog.component';

describe('EntryDialogComponent', () => {
  let component: EntryDialogComponent;
  let fixture: ComponentFixture<EntryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
