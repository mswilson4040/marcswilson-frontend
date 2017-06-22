import { TestBed, inject } from '@angular/core/testing';

import { PowerballService } from './powerball.service';

describe('PowerballService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PowerballService]
    });
  });

  it('should be created', inject([PowerballService], (service: PowerballService) => {
    expect(service).toBeTruthy();
  }));
});
