import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalNavComponent } from './global-nav.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('GlobalNavComponent', () => {
  let component: GlobalNavComponent;
  let fixture: ComponentFixture<GlobalNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ GlobalNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
