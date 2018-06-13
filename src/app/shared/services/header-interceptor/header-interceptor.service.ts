import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {

  private static TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQ2MzMzOWYzLTQzOTktNGI5NC1hM2M4LTc0NzJkNjgxMzc2YiIsImlhdCI6MTUyODYzODIxMywic3ViIjoiZGV2ZWxvcGVyLzFjZTE4NzU2LTNkMjAtZjlhZi1lOWVkLTg2YmU4MGEzYjdlMiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjk0LjIyMy4xNzkuMTY1Il0sInR5cGUiOiJjbGllbnQifV19.a3cljpKuCe75yiyq4pWR2Eb7kalkrwomn5sklDmTKO9rFDTf1b6iO8mll5B17NgYkV4Nrmne0bn-dOXweCNYsg';

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
