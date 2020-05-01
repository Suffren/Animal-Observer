import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { fakeBackendAuthService } from './fake-backend-auth.service';

describe('UserInMemDataOverrideService', () => {
  let service: fakeBackendAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(fakeBackendAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
