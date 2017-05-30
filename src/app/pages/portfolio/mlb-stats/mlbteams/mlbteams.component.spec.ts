import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLBteamsComponent } from './mlbteams.component';

describe('MlbteamsComponent', () => {
  let component: MLBteamsComponent;
  let fixture: ComponentFixture<MLBteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLBteamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLBteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
