import { TestBed } from '@angular/core/testing';

import { fakeBackendAuthService } from './fake-backend-auth.service';

describe('UserInMemDataOverrideService', () => {
  let service: fakeBackendAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(fakeBackendAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
