import { TestBed, inject } from '@angular/core/testing';

import { EmailService } from './email.service';
import {HttpModule} from '@angular/http';

describe('EmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [EmailService]
    });
  });

  it('should be created', inject([EmailService], (service: EmailService) => {
    expect(service).toBeTruthy();
  }));
});
