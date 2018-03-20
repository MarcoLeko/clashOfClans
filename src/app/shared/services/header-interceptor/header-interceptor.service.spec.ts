import { inject, TestBed } from '@angular/core/testing';

import { HeaderInterceptorService } from './header-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlayerSearchService } from '../../../player-result/services/player-search/player-search.service';
import { HashTransformerService } from '../hash-transformer/hash-transformer.service';
import { Mocks } from '../../../testing/mocks';

describe('HeaderInterceptorService', () => {
  const testToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQwMTcyOGFmLTA3OTAtNDNjMy05ZWNmLTVhMzhlYmI4ODM5ZiIsImlhdCI6MTUyMTUyODQ4OCwic3ViIjoiZGV2ZWxvcGVyLzFjZTE4NzU2LTNkMjAtZjlhZi1lOWVkLTg2YmU4MGEzYjdlMiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjkyLjc0Ljk5LjE2MyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.4_yS1Mf4n9BdkFOhJBj_KKN-wn36B3AOEQmkarzc7-KPe5XNsf1wGPyfD747C8iseX9GP4-SYpCVwU-sO79SJQ';

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
    service.getPlayerByPlayerTag(Mocks.PLAYERTAG).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne('v1/players/%239P9UG92CG');
    expect(httpRequest.request.headers.get('Authorization')).toBe('Bearer ' + testToken);
  });
});
