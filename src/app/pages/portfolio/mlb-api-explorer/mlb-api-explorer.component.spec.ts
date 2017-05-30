import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbApiExplorerComponent } from './mlb-api-explorer.component';

describe('MlbApiExplorerComponent', () => {
  let component: MlbApiExplorerComponent;
  let fixture: ComponentFixture<MlbApiExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlbApiExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbApiExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
