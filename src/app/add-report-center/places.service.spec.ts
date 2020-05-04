import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { placesService } from './places.service';

describe('GooglemapsService', () => {
  let service: placesService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(placesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
