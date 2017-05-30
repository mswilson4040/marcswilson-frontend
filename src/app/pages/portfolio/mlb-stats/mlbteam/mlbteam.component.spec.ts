import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLBTeamComponent } from './mlbteam.component';

describe('MLBTeamComponent', () => {
  let component: MLBTeamComponent;
  let fixture: ComponentFixture<MLBTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLBTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLBTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
