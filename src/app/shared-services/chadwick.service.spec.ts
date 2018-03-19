import { TestBed, inject } from '@angular/core/testing';

import { ChadwickService } from './chadwick.service';

describe('ChadwickService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChadwickService]
    });
  });

  it('should be created', inject([ChadwickService], (service: ChadwickService) => {
    expect(service).toBeTruthy();
  }));
});
