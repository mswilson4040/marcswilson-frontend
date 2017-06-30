import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerComparerComponent } from './player-comparer.component';

describe('PlayerComparerComponent', () => {
  let component: PlayerComparerComponent;
  let fixture: ComponentFixture<PlayerComparerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerComparerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComparerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
