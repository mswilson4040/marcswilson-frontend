import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLBTeamComponent } from './mlbteam.component';
import {MlbStatsService} from '../services/mlb-stats.service';
import {Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

describe('MLBTeamComponent', () => {
  let component: MLBTeamComponent;
  let fixture: ComponentFixture<MLBTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLBTeamComponent ],
      providers: [ MlbStatsService, {provide: Http, deps: [MockBackend]} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLBTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
