import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  Logoutuser() {
    return this.httpClient.get('api/logout').pipe(
      map((body: any) => {
        if (body) {
          return body;
        } else {
          return {};
        }
      }),
      catchError(() => of([]))
    );
  }

  login(data: any) {
    return this.httpClient.post('api/login', data);
  }
}
