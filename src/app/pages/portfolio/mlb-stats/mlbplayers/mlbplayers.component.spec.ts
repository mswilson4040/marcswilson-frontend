import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLBPlayersComponent } from './mlbplayers.component';

describe('MLBPlayersComponent', () => {
  let component: MLBPlayersComponent;
  let fixture: ComponentFixture<MLBPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLBPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLBPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
