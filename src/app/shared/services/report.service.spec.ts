import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ReportService } from '../../shared/services/report.service';

describe('ReportService', () => {
  let service: ReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });

    service = TestBed.inject(ReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
