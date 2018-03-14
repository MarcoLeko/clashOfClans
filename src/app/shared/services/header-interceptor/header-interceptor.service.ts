import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {

  private static TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMx' +
    'OGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJh' +
    'dWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImRkZTA0YTliLTkwY2YtNGRiNS1hMTkzL' +
    'ThhMDgzNDU0MGUyMyIsImlhdCI6MTUyMTAzNjkzNCwic3ViIjoiZGV2ZWxvcGVyLzFjZTE4Nz' +
    'U2LTNkMjAtZjlhZi1lOWVkLTg2YmU4MGEzYjdlMiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1' +
    'pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7' +
    'ImNpZHJzIjpbIjEwOS40MS4xOTUuMjE3Il0sInR5cGUiOiJjbGllbnQifV19.99EWWnAhasMwk' +
    'BOztB3iFT_R-O5v8Iwxib-2Emax8DcHzETcI6TQ4WS6IpUMSlLM7gbDe1PxrqxStcvUAjPhcg';

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
