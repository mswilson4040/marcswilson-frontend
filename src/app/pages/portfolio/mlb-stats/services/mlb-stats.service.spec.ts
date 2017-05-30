import { TestBed, inject } from '@angular/core/testing';

import { MlbStatsService } from './mlb-stats.service';

describe('MlbStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MlbStatsService]
    });
  });

  it('should be created', inject([MlbStatsService], (service: MlbStatsService) => {
    expect(service).toBeTruthy();
  }));
});
