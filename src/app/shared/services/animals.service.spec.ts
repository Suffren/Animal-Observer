import { TestBed } from '@angular/core/testing';
import { AnimalsService } from './animals.service';
import { HttpClientModule } from '@angular/common/http';

describe('AnimalsService', () => {
  let service: AnimalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports : [HttpClientModule] });

    service = TestBed.inject(AnimalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
