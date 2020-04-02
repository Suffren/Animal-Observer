import { TestBed } from '@angular/core/testing';

import { placesService } from './places.service';

describe('GooglemapsService', () => {
  let service: placesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(placesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
