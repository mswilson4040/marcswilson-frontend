import { TestBed, inject } from '@angular/core/testing';

import { DatabaseManagerService } from './database-manager.service';
import { HttpClientModule } from '@angular/common/http';
import { UIService } from '../../../shared-services/ui.service';

describe('DatabaseManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DatabaseManagerService,
        UIService
      ],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([DatabaseManagerService], (service: DatabaseManagerService) => {
    expect(service).toBeTruthy();
  }));
});
