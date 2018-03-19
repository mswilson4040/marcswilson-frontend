import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbstatsExplorerComponent } from './mlbstats-explorer.component';

describe('MlbstatsExplorerComponent', () => {
  let component: MlbstatsExplorerComponent;
  let fixture: ComponentFixture<MlbstatsExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlbstatsExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbstatsExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
