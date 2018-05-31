import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {

  private static TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjcxNGNjYWJiLTk3YzUtNGJlYy1iMDM2LWIzNGFiNTQ3YzQ5NyIsImlhdCI6MTUyNzcwMzAzNSwic3ViIjoiZGV2ZWxvcGVyLzFjZTE4NzU2LTNkMjAtZjlhZi1lOWVkLTg2YmU4MGEzYjdlMiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE3OC4xMC4xMDYuOSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.Sd9bM6qbl4BJ-PkUAfM7vg91NP2Z86YJqTogqRtw8zL6SlpRg5tBWpnWhMI46I8JKfhqWmRVhr8l318j3prqjA';

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
