import { TestBed, inject } from '@angular/core/testing';

import { UserManagerService } from './user-manager.service';
import { HttpClientModule } from '@angular/common/http';
import { UIService } from './ui.service';

describe('UserManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserManagerService,
        UIService
      ],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([UserManagerService], (service: UserManagerService) => {
    expect(service).toBeTruthy();
  }));
});
