import { TestBed, inject } from '@angular/core/testing';

import { MlbStatsService } from './mlb-stats.service';
import { HttpClientModule } from '@angular/common/http';

describe('MlbStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MlbStatsService
      ],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([MlbStatsService], (service: MlbStatsService) => {
    expect(service).toBeTruthy();
  }));
});
