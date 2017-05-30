import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLBBallparksComponent } from './mlbballparks.component';

describe('MLBBallparksComponent', () => {
  let component: MLBBallparksComponent;
  let fixture: ComponentFixture<MLBBallparksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLBBallparksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLBBallparksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
