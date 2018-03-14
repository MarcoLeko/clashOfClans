import { inject, TestBed } from '@angular/core/testing';

import { HeaderInterceptorService } from './header-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlayerSearchService } from '../../../player-result/services/player-search/player-search.service';
import { HashTransformerService } from '../hash-transformer/hash-transformer.service';
import { Mocks } from '../../../testing/mocks';

describe('HeaderInterceptorService', () => {
  const testToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMx' +
    'OGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJh' +
    'dWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImRkZTA0YTliLTkwY2YtNGRiNS1hMTkzL' +
    'ThhMDgzNDU0MGUyMyIsImlhdCI6MTUyMTAzNjkzNCwic3ViIjoiZGV2ZWxvcGVyLzFjZTE4Nz' +
    'U2LTNkMjAtZjlhZi1lOWVkLTg2YmU4MGEzYjdlMiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1' +
    'pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7' +
    'ImNpZHJzIjpbIjEwOS40MS4xOTUuMjE3Il0sInR5cGUiOiJjbGllbnQifV19.99EWWnAhasMwk' +
    'BOztB3iFT_R-O5v8Iwxib-2Emax8DcHzETcI6TQ4WS6IpUMSlLM7gbDe1PxrqxStcvUAjPhcg';

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
