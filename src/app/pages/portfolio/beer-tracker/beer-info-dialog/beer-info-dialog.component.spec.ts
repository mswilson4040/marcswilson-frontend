import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerInfoDialogComponent } from './beer-info-dialog.component';

describe('BeerInfoDialogComponent', () => {
  let component: BeerInfoDialogComponent;
  let fixture: ComponentFixture<BeerInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
