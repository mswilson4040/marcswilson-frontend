import { TestBed, inject } from '@angular/core/testing';

import { MlbStatsService } from './mlb-stats.service';
import {Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

describe('MlbStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MlbStatsService, {provide: Http, deps: [MockBackend]}]
    });
  });

  it('should be created', inject([MlbStatsService], (service: MlbStatsService) => {
    expect(service).toBeTruthy();
  }));
});
