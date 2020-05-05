import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });

    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.usersUrl).toEqual('api/users');
  });

  describe('all', () => {
    it('should return a collection of users', () => {
      const usersResponse = [
        {
          "id": 1,
          "email": "j@j.jr",
          "username": "JD",
          "password": "qwerty",
          "firstname": "John ",
          "lastname": "Doe",
          "isAdmin": false,
          "token": "fake-token"
        },
        {
          "id": 2,
          "email": "t@t.tr",
          "username": "JD",
          "password": "azerty",
          "firstname": "Jean",
          "lastname": "Dupond",
          "isAdmin": true,
          "token": "fake-token"
        }
      ];

      let response;
      spyOn(service, 'getAll').and.returnValue(of(usersResponse));

      service.getAll().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(usersResponse);
    });
  });
});
