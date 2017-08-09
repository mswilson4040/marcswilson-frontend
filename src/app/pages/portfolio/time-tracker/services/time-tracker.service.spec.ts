import { TestBed, inject } from '@angular/core/testing';

import { TimeTrackerService } from './time-tracker.service';

describe('TimeTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeTrackerService]
    });
  });

  it('should be created', inject([TimeTrackerService], (service: TimeTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
