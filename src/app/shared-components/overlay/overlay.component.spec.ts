import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayComponent } from './overlay.component';
import {UIService} from '../../shared-services/ui.service';
import {MockBackend} from '@angular/http/testing';
import {Http} from '@angular/http';
import { MatProgressSpinnerModule } from '@angular/material';

describe('OverlayComponent', () => {
  let component: OverlayComponent;
  let fixture: ComponentFixture<OverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayComponent ],
      providers: [UIService, {provide: Http, deps: [MockBackend]}],
      imports: [
        MatProgressSpinnerModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
