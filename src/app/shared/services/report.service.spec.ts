import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

import { ReportService } from '../../shared/services/report.service';

describe('ReportService', () => {
  let service: ReportService;
  const reports = [
    {
      "id": 1,
      "user_id": 2,
      "animal_type": "bat",
      "gender": "",
      "comment": "J'en ai aperçu après être tombé dans un puit, chez mes parents.",
      "localisation": "Brest",
      "time": "2019-10-22T01:00:00-05:00"
    },
    {
      "id": 2,
      "user_id": 3,
      "animal_type": "rabbit",
      "gender": "",
      "comment": "",
      "localisation": "Nantes",
      "time": "2019-09-07T01:00:00-05:00"
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });

    service = TestBed.inject(ReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.reportsUrl).toEqual('api/reports');
  });

  describe('fetchReports', () => {
    it('should return a collection of reports', () => {

      let response;
      spyOn(service, 'fetchReports').and.returnValue(of(reports));

      service.fetchReports().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(reports);
    });
  });

  describe('getReport', () => {
    const report = reports[0];

    it('should return a report', () => {

      let response;
      spyOn(service, 'getReport').and.returnValue(of(reports[0]));

      service.getReport(1).subscribe(res => {
        response = res;
      });

      expect(service.getReport).toHaveBeenCalledWith(1);
      expect(response).toEqual(report);
    });
  });
});
