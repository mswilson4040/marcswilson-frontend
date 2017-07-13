import { TestBed, inject } from '@angular/core/testing';

import { PowerballService } from './powerball.service';
import {MockBackend} from '@angular/http/testing';
import {Http} from '@angular/http';

describe('PowerballService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PowerballService, {provide: Http, deps: [MockBackend]}]
    });
  });

  it('should be created', inject([PowerballService], (service: PowerballService) => {
    expect(service).toBeTruthy();
  }));
});
