import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakpointHelperComponent } from './breakpoint-helper.component';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';

describe('BreakpointHelperComponent', () => {
  let component: BreakpointHelperComponent;
  let fixture: ComponentFixture<BreakpointHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakpointHelperComponent ],
      providers: [
        BreakpointObserver,
        MediaMatcher,
        Platform
      ],
      imports: [

      ]
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
