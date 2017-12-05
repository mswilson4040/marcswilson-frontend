import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakpointHelperComponent } from './breakpoint-helper.component';

describe('BreakpointHelperComponent', () => {
  let component: BreakpointHelperComponent;
  let fixture: ComponentFixture<BreakpointHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakpointHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakpointHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
