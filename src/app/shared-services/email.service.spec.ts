import { TestBed, inject } from '@angular/core/testing';

import { EmailService } from './email.service';
import { HttpClientModule } from '@angular/common/http';
import { UIService } from './ui.service';

describe('EmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        EmailService,
        UIService
      ]
    });
  });

  it('should be created', inject([EmailService], (service: EmailService) => {
    expect(service).toBeTruthy();
  }));
});
