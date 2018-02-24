import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {

  private static TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwM' +
    'DAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbG' +
    'w6Z2FtZWFwaSIsImp0aSI6IjM4MWRjZmI4LTE2Y2MtNDQxMS05ZGZjLTg1YTdlNzFhODkyYiIsImlhdCI6' +
    'MTUxOTQ4MTUwMSwic3ViIjoiZGV2ZWxvcGVyLzFjZTE4NzU2LTNkMjAtZjlhZi1lOWVkLTg2YmU4MGEzYj' +
    'dlMiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwid' +
    'HlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjkxLjE1LjExOC4yMyJdLCJ0eXBlIjoiY2xpZW50In1df' +
    'Q.M3OKbupaZaVmmxEEcJWvJ9hUpNktYFPxLRBDvibi30s7ifmtHJWoey0DxRPW0tubbFMpwJwUB7z2pyNB1KQrhQ';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        'Content-Type':  'application/json',
        Authorization: `Bearer ${HeaderInterceptorService.TOKEN}`
      }
    });

    return next.handle(request);
  }
}
