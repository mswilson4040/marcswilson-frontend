import { TestBed, inject } from '@angular/core/testing';

import { BeerTrackerService } from './beer-tracker.service';

describe('BeerTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerTrackerService]
    });
  });

  it('should be created', inject([BeerTrackerService], (service: BeerTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
