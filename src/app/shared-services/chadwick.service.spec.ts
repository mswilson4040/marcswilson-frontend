import { TestBed, inject } from '@angular/core/testing';

import { ChadwickService } from './chadwick.service';
import { HttpClientModule } from '@angular/common/http';
import { GeoLocationService } from './geo-location.service';

describe('ChadwickService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChadwickService,
        GeoLocationService
      ],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([ChadwickService], (service: ChadwickService) => {
    expect(service).toBeTruthy();
  }));
});
