import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerTrackerComponent } from './beer-tracker.component';

describe('BeerTrackerComponent', () => {
  let component: BeerTrackerComponent;
  let fixture: ComponentFixture<BeerTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
