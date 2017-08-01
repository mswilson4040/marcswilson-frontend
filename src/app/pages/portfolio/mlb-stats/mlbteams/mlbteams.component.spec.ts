import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLBteamsComponent } from './mlbteams.component';
import {MlbStatsService} from '../services/mlb-stats.service';
import {MockBackend} from '@angular/http/testing';
import {Http} from '@angular/http';
import { MdSliderModule } from '@angular/material';

describe('MlbteamsComponent', () => {
  let component: MLBteamsComponent;
  let fixture: ComponentFixture<MLBteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLBteamsComponent ],
      providers: [MlbStatsService, {provide: Http, deps: [MockBackend]}],
      imports: [MdSliderModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLBteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
