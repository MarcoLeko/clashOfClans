import {inject, TestBed} from '@angular/core/testing';

import {HeaderInterceptorService} from "./header-interceptor.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {PlayerSearchService} from "../player-search/player-search.service";
import {HashTransformerService} from "../../../shared/domain/hash-transformer.service";
import {Mocks} from "../../../testing/mocks";

describe('HeaderInterceptorService', () => {
  const testToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwM' +
    'DAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbG' +
    'w6Z2FtZWFwaSIsImp0aSI6IjM4MWRjZmI4LTE2Y2MtNDQxMS05ZGZjLTg1YTdlNzFhODkyYiIsImlhdCI6' +
    'MTUxOTQ4MTUwMSwic3ViIjoiZGV2ZWxvcGVyLzFjZTE4NzU2LTNkMjAtZjlhZi1lOWVkLTg2YmU4MGEzYj' +
    'dlMiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwid' +
    'HlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjkxLjE1LjExOC4yMyJdLCJ0eXBlIjoiY2xpZW50In1df' +
    'Q.M3OKbupaZaVmmxEEcJWvJ9hUpNktYFPxLRBDvibi30s7ifmtHJWoey0DxRPW0tubbFMpwJwUB7z2pyNB1KQrhQ';

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
