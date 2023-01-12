import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { AuthenticationService } from '../authentication/authentication.service';
import { catchError, finalize } from 'rxjs/operators';
import { NgxUiLoaderService } from 'ngx-ui-loader';

/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService, private ngxService: NgxUiLoaderService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.ngxService.start();
    let headers;
    if (request.url === 'api/login') {
      headers = request.headers;
    } else {
      if(sessionStorage.getItem('region') === undefined) {
        sessionStorage.setItem('region',localStorage.getItem('region'));
        if(localStorage.getItem('region') === 'DEMO'){
          // sessionStorage.setItem('regionPic', 'assets/images/flag.png');
        }
        // this.apiservice.updatedProfileFmSession();
      }
      headers = request.headers
        .set('Authorization', `Bearer ${this.authService.getToken()}`).set('country', sessionStorage.getItem('region'));
    }
    if (environment.production === false) {
      request = request.clone({
        headers,
        url: environment.serverUrl + request.url
      });
    } else {
      request = request.clone({
        headers,
        url: environment.liveUrl + request.url
      });
    }
    return next.handle(request).pipe(
      catchError(error => {
        console.log('error occured:', error);
        throw error;
      }),
      finalize(() => {
        this.ngxService.stop();
      })
    );
  }
}
