import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbStatsComponent } from './mlb-stats.component';
import {MlbStatsService} from './services/mlb-stats.service';
import {MockBackend} from '@angular/http/testing';
import {Http} from '@angular/http';

describe('MlbStatsComponent', () => {
  let component: MlbStatsComponent;
  let fixture: ComponentFixture<MlbStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlbStatsComponent ],
      providers: [ MlbStatsService, {provide: Http, deps: [MockBackend]} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
