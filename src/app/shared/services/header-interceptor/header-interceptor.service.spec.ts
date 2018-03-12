import { inject, TestBed } from '@angular/core/testing';

import { HeaderInterceptorService } from './header-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlayerSearchService } from '../../../player-result/services/player-search/player-search.service';
import { HashTransformerService } from '../../domain/hash-transformer.service';
import { Mocks } from '../../../testing/mocks';

describe('HeaderInterceptorService', () => {
  const testToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6Ij' +
    'I4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJ' +
    'zdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImYwO' +
    'WFlZjJlLTU5NWUtNDZhYi05NzMwLTM2YzY3ZTE4MjRiNyIsImlhdCI6MTUyMDg' +
    '1NjA5Nywic3ViIjoiZGV2ZWxvcGVyLzFjZTE4NzU2LTNkMjAtZjlhZi1lOWVkL' +
    'Tg2YmU4MGEzYjdlMiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InR' +
    'pZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7I' +
    'mNpZHJzIjpbIjYyLjI0NS4xNTYuNTgiXSwidHlwZSI6ImNsaWVudCJ9XX0.S8h' +
    'g2_b9TTJi-kobhADqLNSsxLxU4f-1t4npb_wd4uF6DkUOauGj2cpr5Lsz0uzI9E' +
    'JwUbBjnM_8_CusQdjZ1w';

  let service: PlayerSearchService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PlayerSearchService,
        HashTransformerService,
        HeaderInterceptorService,
        {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorService, multi: true}]
    });

    service = TestBed.get(PlayerSearchService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should initialize',  inject([HeaderInterceptorService], (underTest: HeaderInterceptorService) => {
    expect(underTest).toBeTruthy();
  }));

  it('should add an Authorization header', () => {
    service.getPlayer(Mocks.PLAYERTAG).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne('v1/players/%239P9UG92CG');
    expect(httpRequest.request.headers.get('Authorization')).toBe('Bearer ' + testToken);
  });
});
