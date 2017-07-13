import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerballComponent } from './powerball.component';
import {PowerballService} from './services/powerball.service';
import {MockBackend} from '@angular/http/testing';
import {Http} from '@angular/http';
import {UIService} from '../../../shared-services/ui.service';

describe('PowerballComponent', () => {
  let component: PowerballComponent;
  let fixture: ComponentFixture<PowerballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerballComponent ],
      providers: [PowerballService, {provide: Http, deps: [MockBackend]}, UIService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
