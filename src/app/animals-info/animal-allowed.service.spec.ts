import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AnimalAllowedService } from './animal-allowed.service';

describe('AnimalAllowedService', () => {
  let service: AnimalAllowedService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule] });
    service = TestBed.inject(AnimalAllowedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
