import { TestBed, inject } from '@angular/core/testing';
import { BeerTrackerService } from './beer-tracker.service';
import {MockBackend} from '@angular/http/testing';
import {Http} from '@angular/http';


describe('BeerTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerTrackerService, {provide: Http, deps: [MockBackend]}]
    });
  });

  it('should be created', inject([BeerTrackerService], (service: BeerTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
