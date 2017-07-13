import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellComponent } from './shell.component';
import {GlobalNavComponent} from '../shared-components/global-nav/global-nav.component';
import {RouterTestingModule} from '@angular/router/testing';
import {OverlayComponent} from '../shared-components/overlay/overlay.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ShellComponent, GlobalNavComponent, OverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
