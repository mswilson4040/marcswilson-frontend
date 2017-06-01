import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLBBallparksComponent } from './mlbballparks.component';
import {MlbStatsService} from '../services/mlb-stats.service';
import {MockBackend} from '@angular/http/testing';
import {Http} from '@angular/http';

describe('MLBBallparksComponent', () => {
  let component: MLBBallparksComponent;
  let fixture: ComponentFixture<MLBBallparksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLBBallparksComponent ],
      providers: [ MlbStatsService, {provide: Http, deps: [MockBackend]} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLBBallparksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
