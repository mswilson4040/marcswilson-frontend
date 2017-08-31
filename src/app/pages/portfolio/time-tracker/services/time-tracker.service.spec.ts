import { TestBed, inject } from '@angular/core/testing';

import { TimeTrackerService } from './time-tracker.service';
import {HttpModule} from '@angular/http';

describe('TimeTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [TimeTrackerService]
    });
  });

  it('should be created', inject([TimeTrackerService], (service: TimeTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
