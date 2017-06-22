import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerballComponent } from './powerball.component';

describe('PowerballComponent', () => {
  let component: PowerballComponent;
  let fixture: ComponentFixture<PowerballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
