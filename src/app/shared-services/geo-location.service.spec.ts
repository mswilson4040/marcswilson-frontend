import { TestBed, inject } from '@angular/core/testing';

import { GeoLocationService } from './geo-location.service';
import { HttpClientModule } from '@angular/common/http';

describe('GeoLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoLocationService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([GeoLocationService], (service: GeoLocationService) => {
    expect(service).toBeTruthy();
  }));
});
