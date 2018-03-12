import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {

  private static TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6Ij' +
    'I4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJ' +
    'zdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImYwO' +
    'WFlZjJlLTU5NWUtNDZhYi05NzMwLTM2YzY3ZTE4MjRiNyIsImlhdCI6MTUyMDg' +
    '1NjA5Nywic3ViIjoiZGV2ZWxvcGVyLzFjZTE4NzU2LTNkMjAtZjlhZi1lOWVkL' +
    'Tg2YmU4MGEzYjdlMiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InR' +
    'pZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7I' +
    'mNpZHJzIjpbIjYyLjI0NS4xNTYuNTgiXSwidHlwZSI6ImNsaWVudCJ9XX0.S8h' +
    'g2_b9TTJi-kobhADqLNSsxLxU4f-1t4npb_wd4uF6DkUOauGj2cpr5Lsz0uzI9E' +
    'JwUbBjnM_8_CusQdjZ1w';

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
